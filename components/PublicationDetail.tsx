import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUp, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';

interface PublicationItem {
  num: number;
  text: string;
  img: string;
  link?: string;
}

interface PublicationDetailProps {
  period: '2021' | '2011' | '2010' | 'book';
  onBack: () => void;
}

const PublicationDetail: React.FC<PublicationDetailProps> = ({ period, onBack }) => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Ensure animation runs after elements are rendered
    const timer = setTimeout(() => {
      gsap.fromTo('.pub-item', 
        { opacity: 0, x: -20 }, 
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      );
    }, 100);

    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [period]);

  const scrollToYear = (year: string) => {
    const element = document.getElementById(`year-${year}`);
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPubList = (items: PublicationItem[], hideButton: boolean = false) => (
    <div className="space-y-12">
      {items.map((item) => {
        const finalLink = item.link || `https://scholar.google.com/scholar?q=${encodeURIComponent(item.text)}`;
        
        return (
          <div key={`${item.num}-${item.text.substring(0, 20)}`} className="pub-item flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full md:w-[22%] aspect-video md:aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 flex-shrink-0 relative">
              <img 
                src={item.img} 
                alt={`Publication ${item.num}`} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Paper+Image';
                }}
              />
              <div className="absolute top-4 left-4 min-w-[2.5rem] h-10 px-2 bg-[#131C31] text-white flex items-center justify-center font-black rounded-lg text-lg shadow-lg">
                {item.num}
              </div>
            </div>
            <div className="flex-grow pt-2">
              <p className="text-xl text-[#131C31] leading-relaxed font-medium mb-6">
                {item.text}
              </p>
              {!hideButton && (
                <div className="flex">
                  <a 
                    href={finalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-sky-500 border border-sky-200 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-sky-50 hover:border-sky-400 transition-all shadow-sm group/link"
                  >
                    <span>Go to article</span>
                    <ExternalLink size={14} className="transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const getCommonHeader = (title: string, subtitle: string) => (
    <div className="bg-[#131C31] text-white py-20 mb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Overview</span>
        </button>
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-white leading-tight">{title}</h1>
        <p className="text-slate-400 text-xl max-w-2xl font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );

  const renderYearNavigation = (years: string[]) => (
    <div className="sticky top-20 z-30 py-4 mb-12 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto max-w-6xl flex flex-wrap gap-4 justify-center md:justify-start">
        {years.map(year => (
          <button 
            key={year}
            onClick={() => scrollToYear(year)}
            className="px-6 py-2 rounded-full border border-slate-300 text-slate-600 hover:bg-[#131C31] hover:text-white hover:border-[#131C31] transition-all font-bold text-sm shadow-sm"
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );

  if (period === 'book') {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${showTopBtn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'} hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}><ArrowUp size={24} /></button>
        {getCommonHeader("Book Chapters", "Key academic contributions and standard texts.")}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="pt-8">
            {renderPubList([
              { num: 10, text: 'Ahn J.-H. and Kim J.H, "Micro Light Emitting Diode: Fabrication and Devices", Springer (2022)', img: '/images/2022/10.png' },
              { num: 9, text: 'Sharma B., Das T., and Ahn J.-H., "Graphene for Flexible Electronics", a chapter in, "Flexible Carbon-based Electronics", edited by Houston Samori and Palermo, Wiley-VCH (2018)', img: '/images/2018/9.png' },
              { num: 8, text: 'Ahn J.-H and Rogers J., "Silicon Nanomembranes: Fundamental Science and Applications", Wiley-VCH (2016)', img: '/images/2016/8.png' },
              { num: 7, text: 'Jang H, Lee W, Kim M. and Ahn J.-H., "Inorganic Semiconductor Nanomaterials for Flexible Electronics", a chapter in, "Large Area and Flexible Electronics", edited by Carina Paraiso, Wiley-VCH (2015)', img: '/images/2015/7.png' },
              { num: 6, text: 'Yan C. Lee S., 출력 H. and Ahn J.-H., "Graphene for stretchable electronics", a chapter in, " Stretchable Electronics", edited by T. Someya, Wiley-VCH (2012)', img: '/images/2012/6.png' },
              { num: 5, text: 'Yan C. Lee Y, Jang H. and Ahn J.-H., "Graphene films for unusual format electronics", a chapter in, " Graphene systhesis and applications ", edited by Choi W and Lee J, CRC press (2011)', img: '/images/2011/5.png' },
              { num: 4, text: 'Ahn J.-H., Kim, D. -H., and Rogers J. A., "Micro and Nanostructured Semiconductor Materials for Flexible and Stretchable Electronics", a chapter in, " Comprehensive Semiconductor Science & Technology ", edited by Bhattacharya Pallab, Elsevier (2011)', img: '/images/2011/4.png' },
              { num: 3, text: 'Ahn J.-H., Baca A. J., and Rogers J. A.,“ Inorganic Nanomaterials for High Performance Flexible Electronics”, a chapter in, "Application of Physical Methods to Inorganic and Bioinorganic Chemistry", edited by Robert A Scott and Charles M Lukehart, John Wiley (2009).', img: '/images/2009/3.png' },
              { num: 2, text: 'Ahn J.-H., Meitl M. A., Baca A. J., Khang D. Y., Kim H. S., and Rogers J. A.,“ Transfer Printing Techniques and Inorganic Single-Crystalline Materials for Flexible and Stretchable Electronics”, a chapter in, "Solution Processing of Inorganic Materials", edited by David Mitzi, John Wiley & Sons (2009).', img: '/images/2009/2.png' },
              { num: 1, text: 'Sun Y., Ahn J.-H. Rogers J.A., “Printable semiconductors for flexible electronics”, McGraw-Hill Yearbook of Science & Technology, 192-197 (2007).', img: '/images/2007/1.png' }
            ], true)}
          </div>
          <div className="mt-32 pt-16 border-t border-slate-200 flex justify-end"><button onClick={onBack} className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"><span>Return to Lab Overview</span><ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" /></button></div>
        </div>
      </div>
    );
  }

  if (period === '2011') {
    const years = ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011'];
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${showTopBtn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'} hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}><ArrowUp size={24} /></button>
        {getCommonHeader("Publications", "2020 to 2011")}
        <div className="container mx-auto px-6 max-w-6xl">
          {renderYearNavigation(years)}
          <div className="space-y-32">
            <section id="year-2020" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2020</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 13, text: 'B. Shao et al., "Crypto Primitive of MOCVD MoS2 Transistors for Highly Secured Physical Unclonable Functions", Nano Research, 09, 1998(2020)', img: '/images/2020/13.png' },
                { num: 12, text: 'S. Lee et al., "3D Motion Tracking Display Enabled by Magneto-Interactive Electroluminescence.", Nature Communications, 11, 6072 (2020)', img: '/images/2020/12.png' },
                { num: 11, text: 'A. T. Hoang et al., "Epitaxial Growth of Wafer-Scale Molybdenum Disulfide/Graphene Heterostructures by Metal–Organic Vapor-Phase Epitaxy and Their Application in Photodetectors.", ACS Applied Materials & Interfaces, 12, 44335 (2020)', img: '/images/2020/11.png' },
                { num: 10, text: 'C. Lee et al., "A 6.5-μW 10-kHz BW 80.4-dB SNDR Gm-C-Based CT∆∑ Modulator With a Feedback-Assisted Gm Linearization for Artifact-Tolerant Neural Recording.", IEEE Journal of Solid-State Circuits, 11, 2889 (2020)', img: '/images/2020/10.png' },
                { num: 9, text: 'A. Katiyar et al., "Breaking the absorption limit of Si towards SWIR wavelength range via strain engineering", Science Advances, 6, eabb0576, (2020)', img: '/images/2020/9.png' },
                { num: 8, text: 'Y. Kim et al., "Dual resonant sum frequency generations from two-dimensional materials", Nano Letters, 20, 4530 (2020)', img: '/images/2020/8.png' },
                { num: 7, text: 'M. Choi et al., "Full color active-matrix organic-light emitting diode display on human skin based on a large area MoS2 backplane", Science Advances, 6, eabb5898 (2020)', img: '/images/2020/7.png' },
                { num: 6, text: 'S. Lim et al., "Assembly of Foldable 3D Microstructures Using Graphene Hinges", Advanced Materials, 32, 2001303 (2020)', img: '/images/2020/6.png' },
                { num: 5, text: 'N. Dwivedi et al., "Slippery and Wear-Resistant Surfaces Enabled by Interface Engineered Graphene", Nano Letters, 20, 905 (2020)', img: '/images/2020/5.png' },
                { num: 4, text: 'Y. Lee and J. H. Ahn, "Biomimetic Tactile Sensors Based on Nanomaterials", ACS Nano, 14,1220 (2020)', img: '/images/2020/4.png' },
                { num: 3, text: 'T. Choi and S. D. Kim et al., "Rate performance enhancement of lithium-ion battery using precise thickness-controllable-carbon-coated titanium dioxide nanowire array electrode via atomic layer deposition", Electrochimica Acta, 334, 135596 (2020)', img: '/images/2020/3.png' },
                { num: 2, text: 'H. Zhao and Y. Lee et al., "Nanofabrication approaches for functional three-dimensional architectures", Nano Today, 30, 100825 (2020)', img: '/images/2020/2.png' },
                { num: 1, text: 'X. Chen and J.-H Ahn, "Biodegradable and Bioabsorbable Sensors Based on Two-Dimensional Materials", Journal of Materials Chemistry B, 8, 1082 (2020)', img: '/images/2020/1.png' }
              ])}
            </section>

            <section id="year-2019" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2019</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 12, text: 'M.A. Giambra et al., "Investigation on Metal–Oxide Graphene Field-Effect Transistors With Clamped Geometries", IEEE Electron Device Soc, 7, 964 (2019)', img: '/images/2019/12.png' },
                { num: 11, text: 'J.-B. Lee et al., "Direct Synthesis of Self-Assembled WSe2/MoS2 Heterostructure Array and Its Optoelectrical Properties", Advanced Materials 31, 1904194 (2019)', img: '/images/2019/11.png' },
                { num: 10, text: 'M. Shi, et al., "Boosting Ion Dynamics Through Superwettable Leaf-like Porous g-C3N4 Film for Ionogel Supercapacitors", NPG Asia Materials 11:61 (2019)', img: '/images/2019/10.png' },
                { num: 9, text: 'Y. Kim et al., "Synthesis of two-dimensional MoS2/graphene heterostructure by atomic layer deposition using MoF6 precursor", Applied Surface Science 494, 591 (2019)', img: '/images/2019/9.png' },
                { num: 8, text: 'A. Katiyar et al, "Ultrasoft Silicon Nanomembranes: Thickness-dependent Effective Elastic Modulus", Nanoscale 11, 15184 (2019)', img: '/images/2019/8.png' },
                { num: 7, text: 'Y. R. Lee et al., "Atomic‐Level Customization of 4 in. Transition Metal Dichalcogenide Multilayer Alloys for Industrial Applications" Advanced Materials, 31, 1901405 (2019)', img: '/images/2019/7.png' },
                { num: 6, text: 'T. Nam et al., "Low-temperature, high-growth-rate ALD of SiO2 using aminodisilane precursor" Applied Surface Science 485, 381 (2019).', img: '/images/2019/6.png' },
                { num: 5, text: 'Y. Lee, et al., "Graphene-Based Stretchable/Wearable Self-Powered Touch Sensor" Nano Energy, 62, 259-267 (2019).', img: '/images/2019/5.png' },
                { num: 4, text: 'D. Shin, et al., "Electronic Structure of Nonionic Surfactant-Modified PEDOT:PSS and Its Application in Perovskite Solar Cells with Reduced Interface Recombination" ACS Applied Materials & Interfaces, 11, 17028 (2019).', img: '/images/2019/4.png' },
                { num: 3, text: 'Y. J. Park, et al., "Controllable P- and N-type conversion of MoTe2 via oxide interfacial layer for logic circuits" Small, 15, 1901772 (2019).', img: '/images/2019/3.png' },
                { num: 2, text: 'H. Shin, et al., "Stretchable Electroluminescent Display Enabled by Graphene-based Hybrid Electrode" ACS Applied Materials & Interfaces, 11, 14222 (2019).', img: '/images/2019/2.png' },
                { num: 1, text: 'Y. J. Park, et al., "All MoS2 Based Large Area, Skin-Attachable Active-Matrix Tactile Sensor" ACS Nano, 13, 3023 (2019).', img: '/images/2019/1.png' }
              ])}
            </section>

            <section id="year-2018" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2018</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 17, text: '안종현, "그래핀과 이황화몰리브덴을 활용한 웨어러블 전자소자", 학술원논문집(자연과학편), 57집(2호), 185-205 (2018)', img: '/images/2018/17.png' },
                { num: 16, text: 'J. H. Lee, et al., "Universality strain-induced anisotropic friction domains on 2D materials", NPG Asia Materials, 1 (2018)', img: '/images/2018/16.png' },
                { num: 15, text: 'A. T. Hoang, et al., "Orientation-dependent optical characterization of atomically thin transition metal ditellurides", Nanoscale, 10, 21978 (2018)', img: '/images/2018/15.png' },
                { num: 14, text: 'K. Dhakal, et al., "Probing the Upper Band Gap of the Atomic Rhenium Disulfide Layers", Light: Science & Applications, 7, 98 (2018)', img: '/images/2018/14.png' },
                { num: 13, text: 'M. A. Giambra, et al., "Layout influence on microwave performance of graphene field effect transistors", Electronic Letters, 54, 984-986 (2018)', img: '/images/2018/13.png' },
                { num: 12, text: 'J. Shim et al, "Controlled crack propagation for atomic precision handling of wafer-scale two-dimensional materials" Science, 11, eaat8126 (2018)', img: '/images/2018/12.png' },
                { num: 11, text: 'X. Chen, et al., "Degradation behaviors and mechanisms of MoS2 crystals relevant to bioabsorbable electronics", NPG Asia Materials, 10, 810 (2018)', img: '/images/2018/11.png' },
                { num: 10, text: 'M. Park, et al., "Recent Advances in Tactile Sensing Technology", Micromachines, 9, 321 (2018)', img: '/images/2018/10.png' },
                { num: 9, text: 'S. Kim, et al., "Additive-free electrode fabrication with reduced graphene oxide using supersonic kinetic spray for flexible lithium-ion batteries", Carbon, 139, 195 (2018)', img: '/images/2018/9.png' },
                { num: 8, text: 'S.W. Park, et al., "Epidural electrotherapy for epilepsy", Small, 14, 1801732 (2018)', img: '/images/2018/8.png' },
                { num: 7, text: 'W. Lee, et al., "Two-Dimensional Materials in Functional Three-Dimensional Architectures with Applications in Photodetection and Imaging", Nature Communications, 9, 1417 (2018)', img: '/images/2018/7.png' },
                { num: 6, text: 'X. Chen et al., "CVD-Grown Monolayer MoS2 in Bioabsorbable Electronics and Biosensors", Nature Communications, 9, 1690 (2018)', img: '/images/2018/6.png' },
                { num: 5, text: 'M. Choi et al., "Flexible Active-Matrix Organic Light-Emitting Diode Display Enabled by MoS2 Thin-Film Transistor", Science Advances, 4, eaas8721 (2018)', img: '/images/2018/5.png' },
                { num: 4, text: 'H. Jang et al., "Transient SHG imaging on ultrafast carrier dynamics of MoS2 nanosheets", Advanced Materials, 30(14), 1705190 (2018)', img: '/images/2018/4.png' },
                { num: 3, text: 'S. Shinde et al., "Surface-functionalization-mediated Direct Transfer of Molybdenum Disulfide for Large-area Flexible Devices", Advanced Functional Materials, 28(23), 1706231 (2018)', img: '/images/2018/3.png' },
                { num: 2, text: 'S. Shinde et al., "A Stacking-Controllable Interlayer Coupling and Symmetric Configuration of Multilayered MoS2", NPG Asia Materials, 10, e468 (2018).', img: '/images/2018/2.png' },
                { num: 1, text: 'T. Das et al., "Graphene-based flexible and wearable electronics", Journal of Semiconductors, 39, 011007 (2018)', img: '/images/2018/1.png' }
              ])}
            </section>

            <section id="year-2017" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2017</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 9, text: 'S. Lee et al., "Thickness-Dependent Phonon Renormalization and Enhanced Raman Scattering in Ultrathin Silicon Nanomembranes", Nano Letters, 17, 7744-7750 (2017)', img: '/images/2017/9.png' },
                { num: 8, text: 'M. Kang et al., "Graphene-based Three Dimensional Capacitive Touch Sensor for Wearable Electronics", ACS Nano, 11, 7950-7957 (2017)', img: '/images/2017/8.png' },
                { num: 7, text: 'T. Das et al., "Development of electronic devices based on two-dimensional materials", FlatChem, 3, 43-63 (2017)', img: '/images/2017/7.png' },
                { num: 6, text: 'H. Kim et al., "Graphene for flexible and wearable device applications", Carbon, 120, 244-257 (2017)', img: '/images/2017/6.png' },
                { num: 5, text: 'K. P. Dhakal et al., "Local Strain Induced Band Gap Modulation and Photoluminescence Enhancement of Multilayer Transition Metal Dichalcogenides", Chemistry of Materials, 29, 5124-5133 (2017)', img: '/images/2017/5.png' },
                { num: 4, text: 'T. Nam et al., "A composite layer of atomic-layer-deposited Al2O3 and graphene for flexible moisture barrier", Carbon, 116 (2017)', img: '/images/2017/4.png' },
                { num: 3, text: 'M. Choi et al., "Stretchable Active Matrix Inorganic Light-Emitting Diode Display Enabled by Overlay-Aligned Roll-Transfer Printing", Advanced Functional Materials, 27(11), 1606005 (2017)', img: '/images/2017/3.png' },
                { num: 2, text: 'J. Kim et al., "Highly Sensitive, Gate-Tunable, Room-Temperature Mid-Infrared Photodetection Based on Graphene−Bi2Se3 Heterostructure", ACS Photonics, 4, 482-488 (2017)', img: '/images/2017/2.png' },
                { num: 1, text: 'B. Jang et al., "Damage mitigation in roll-to-roll transfer of CVD-graphene to flexible substrates", 2D Materials, 4 (2017)', img: '/images/2017/1.png' }
              ])}
            </section>

            <section id="year-2016" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2016</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 16, text: 'S. Kim et al., "Additive-free synthesis of Li4Ti5O12 nanowire arrays on freestanding ultrathin graphite as a hybrid anode for flexible lithium ion batteries", J. Mater. Chem. A, 4, 19197 (2016)', img: '/images/2016/16.png' },
                { num: 15, text: 'T. Han et al., "Approaching ultimate flexible organic light-emitting diodes using a graphene anode", NPG Asia Mat., 8, e303 (2016)', img: '/images/2016/15.png' },
                { num: 14, text: 'T. Das et al., "Highly Flexible Hybrid CMOS Inverter Based on Si Nanomembrane and Molybdenum Disulfide", Small, 12, 5720-5727 (2016)', img: '/images/2016/14.png' },
                { num: 13, text: 'H. Chu et al., "Conformal, Graphene-based Triboelectric Nanogenerator for Self-powered Wearable Electronics", Nano Energy, 27, 298 (2016)', img: '/images/2016/13.png' },
                { num: 12, text: 'X. Chen et al., "Lithography-free plasma-induced patterned growth of MoS2 and its heterojunction with graphene", Nanocale, 8, 15181 (2016)', img: '/images/2016/12.png' },
                { num: 11, text: 'B. K. Sharma et al., "Flexible and Stretchable Oxide Electronics", Adv. Electronic Mat., 2, 1600105 (2016)', img: '/images/2016/11.png' },
                { num: 10, text: 'J. Hong et al., "A facile method for the selective decoration of graphene defects based on a galvanic displacement reaction", NPG Asia Mat., 8(4), e262 (2016)', img: '/images/2016/10.png' },
                { num: 9, text: 'H. Kim et al., "On-Fabrication Solid-State N-Doping of Graphene by an Electron-Transporting Metal Oxide Layer for Efficient Inverted Organic Solar Cells", Adv. Energy. Mat., 6, 1600172 (2016)', img: '/images/2016/9.png' },
                { num: 8, text: 'S. An et al., "Self-Junctioned Copper Nanofiber Transparent Flexible Conducting Film via Electrospinning and Electroplating", Adv. Mat., 28, 7149-7154 (2016)', img: '/images/2016/8.png' },
                { num: 7, text: 'L. M. Loong et al., "Flexible MgO barrier magnetic tunnel junctions", Adv. Mat., 28, 4983-4990 (2016)', img: '/images/2016/7.png' },
                { num: 6, text: 'W. Lee et al., "Mobility enhancement of strained Si transistors by transfer printing on plastic substrates", NPG Asia Mat., 8, e256 (2016)', img: '/images/2016/6.png' },
                { num: 5, text: 'M. Park et al., "MoS2 based tactile sensor for electronic skin applications", Adv. Mat., 28, 2556 (2016)', img: '/images/2016/5.png' },
                { num: 4, text: 'H. Jang et al., "Graphene-Based Flexible and Stretchable Electronics", Adv. Mat., 28, 4184- 4202 (2016)', img: '/images/2016/4.png' },
                { num: 3, text: 'B. K. Sharma et al., "Instability in an amorphous In–Ga–Zn–O field effect transistor upon water exposure", J. Phys. D: Appl. Phys., 49, 055102 (2016)', img: '/images/2016/3.png' },
                { num: 2, text: 'Y. Kim et al., Self-limiting layer synthesis of transition metal dichalcogenides", Scientific Report, 6, 18754 (2016)', img: '/images/2016/2.png' },
                { num: 1, text: 'Y. Lee et al., "Enhanced Raman Scattering of Rhodamine 6G Films on Two-Dimensional Transition Metal Dichalcogenides Correlated to Photoinduced Charge Transfer", Chem. Mater., 28, 180 (2016)', img: '/images/2016/1.png' }
              ])}
            </section>

            <section id="year-2015" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2015</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 21, text: 'H. K. Seo et al., "Value-added Synthesis of Graphene: Recycling Industrial Carbon Waste into Electrodes for High Performance Electronic Devices", Scientific Report, 5, 16710 (2015)', img: '/images/2015/21.png' },
                { num: 20, text: 'K. Kim et al., "Epitaxial Growth of Thin Ferroelectric Polymer Films on Graphene Layer for Fully Transparent and Flexible Nonvolatile Memory", Nano Lett., 16, 334 (2015)', img: '/images/2015/20.png' },
                { num: 19, text: 'S. Sim et al., "Ultra-high modulation depth exceeding 2,400% in optically controlled topological surface plasmons", Nature Communications, 6, 9814 (2015)', img: '/images/2015/19.png' },
                { num: 18, text: 'W. Lee et al., "Stretchable Si logic devices with graphene interconnects", Small, 11, 6272 (2015)', img: '/images/2015/18.png' },
                { num: 17, text: 'T. Das et al., "Vertical field effect tunneling transistor based on graphene-ultrathin Si nanomembrane heterostructures", 2D Materials, 2, 044006 (2015)', img: '/images/2015/17.png' },
                { num: 16, text: 'I.-K. Oh et al., "Nucleation and Growth of the HfO2 Dielectric Layer for Graphene-Based Devices", Chemistry of Materials, 27, 5868 (2015)', img: '/images/2015/16.png' },
                { num: 15, text: 'B. Park et al., "A Facile Route for Patterned Growth of Metal-Insulator Carbon Lateral Junction through One-pot Synthesis", ACS Nano, 9(8), 8352-8360 (2015)', img: '/images/2015/15.png' },
                { num: 14, text: 'S.C Lee et al., "Efficient Direct Reduction of Graphene Oxide by Silicon Substrate", Scientific Report, 5, 12306 (2015)', img: '/images/2015/14.png' },
                { num: 13, text: 'J. Seo et al., "Path-programmable water droplet manipulations on an adhesion controlled superhydrophobic surface", Scientific Report, 5, 12326 (2015)', img: '/images/2015/13.png' },
                { num: 12, text: 'S.K. Lee et al., "Drying-mediated Self-assembled Growth of Transition Metal Dichalcogenide Wires and Their Heterostructures", Adv. Mat., 27, 4142-4149 (2015)', img: '/images/2015/12.png' },
                { num: 11, text: 'K. Choi et al., "Reduced Water Vapor Transmission Rate of Graphene Gas Barrier Films for Flexible Organic Field-Effect Transistors", ACS Nano, 9(6), 5818-5824 (2015)', img: '/images/2015/11.png' },
                { num: 10, text: 'Y. Lee et al., "Pressure-induced Chemical Enhancement in Raman Scattering from Graphene-Rhodamine 6G-Graphene Sandwich Structures", Carbon, 89, 318-327 (2015)', img: '/images/2015/10.png' },
                { num: 9, text: 'Y. Lee et al., "Hybrid structures of organic dye and graphene for ultrahigh gain photodetectors", Carbon, 88, 165-172 (2015)', img: '/images/2015/9.png' },
                { num: 8, text: 'H. Cho et al., "Improvement of work function and hole injection efficiency of graphene anode using CHF3 plasma treatment", 2D Materials, 2, 014002 (2015)', img: '/images/2015/8.png' },
                { num: 7, text: 'M. Park et al., "Si membrane based tactile sensor with active matrix circuitry for artificial skin applications", Applied Physics Letters, 106, 043502 (2015)', img: '/images/2015/7.png' },
                { num: 6, text: 'K. Byun et al., "Flexible graphene based microwave attenuators", Nanotechnology, 26, 055201 (2015)', img: '/images/2015/6.png' },
                { num: 5, text: 'K. Rana et al., "Additive-Free Thick Graphene Film as an Anode Material for Flexible Lithium-Ion Batteries", Nanoscale, 7, 7065 (2015)', img: '/images/2015/5.png' },
                { num: 4, text: 'J.B. Lee et al., "Influence of Nonionic Surfactant-modified PEDOT:PSS on Graphene", Carbon, 85, 261-268 (2015)', img: '/images/2015/4.png' },
                { num: 3, text: 'A. Ferrari et al., "Science and technology roadmap for graphene, related two-dimensional crystals, and hybrid systems", Nanoscale, 7, 4598-4810 (2015)', img: '/images/2015/3.png' },
                { num: 2, text: 'Y. Lee et al., "High-Performance Perovskite-Graphene Hybrid Photodetector", Adv. Mat, 27, 41-46 (2015)', img: '/images/2015/2.png' },
                { num: 1, text: 'S.M.Lee et al., "Graphene as flexible electronic materials: mechanical limitation by defect formation and efforts to overcome", Materials Today, 18(6), 336-344 (2015)', img: '/images/2015/1.png' }
              ])}
            </section>

            <section id="year-2014" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2014</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 21, text: 'S.H. Bae et al., "Graphene-Based Heat Spreader for Flexible Electronic Devices", IEEE Transactions on Electron Devices, 61(12), 4171-4175 (2014)', img: '/images/2014/21.png' },
                { num: 20, text: 'H. Jang et al., "Observation of the inverse GPZR effect in silicon nanomembranes probed by ultrafast terahertz spectroscopy", Nano Lett., 14, 6942-6948 (2014)', img: '/images/2014/20.png' },
                { num: 19, text: 'J.-H. Ahn et al., "Graphene for displays that bend", Nature Nanotechnology, 9, 737 (2014)', img: '/images/2014/19.png' },
                { num: 18, text: 'J. Balakrishnan et al., "Giant Spin Hall Effect in Graphene Grown by Chemical Vapor De-position", Nature Communications, 5:4748 (2014)', img: '/images/2014/18.png' },
                { num: 17, text: 'S. Saha et al., "Unconventional Transport through Graphene on SrTiO3, A Plausible Effect of SrTiO3 Phase-Transitions", Scientific Report, 4, 6173 (2014)', img: '/images/2014/17.png' },
                { num: 16, text: 'Y.J Park et al., "Graphene Based Conformal Devices", ACS Nano, 8(8), 7655-7662 (2014)', img: '/images/2014/16.png' },
                { num: 15, text: 'Y.T. Kim et al., "Uniform Growth of High-Quality Oxide Thin Films on Graphene Using a CdSe Quantum Dot Array Seeding Layer", ACS Appl. Mater. Interfaces, 6, 13015-13022 (2014)', img: '/images/2014/15.png' },
                { num: 14, text: 'B.K. Sharma et al et al., "Selective Growth of Inorganic Nanomaterials on an Oxidized Graphene Scaffold",Carbon, 78, 317-325 (2014)', img: '/images/2014/14.png' },
                { num: 13, text: 'D.Y. Kim et al., "Self-Healing Reduced Graphene Oxide Films by Supersonic Kinetic Spraying", Adv. Func. Mat, 24, 4986-4995 (2014)', img: '/images/2014/13.png' },
                { num: 12, text: 'K. Rana et al., "Highly Conductive Freestanding Graphene Films as Anode Current Collectors for Flexible Lithium-ion Batteries", ACS Appl. Mater. Interfaces, 6, 11158-11166 (2014)', img: '/images/2014/12.png' },
                { num: 11, text: 'J.Y. Oh et al., "Effect of PEDOT Nanofibril Networks on the Conductivity, Flexibility and Coatability of PEDOT: PSS Films", ACS Appl. Mater. Interfaces, 6, 6954-6961 (2014)', img: '/images/2014/11.png' },
                { num: 10, text: 'S. Won et al., "Double-Layer CVD Graphene as Stretchable Transparent Electrodes", Nanoscale, 6, 6057 (2014)', img: '/images/2014/10.png' },
                { num: 9, text: 'Y. Hwangbo et al., "Fracture Characteristics of Monolayer CVD-Graphene", Scientific Reports, 4:4439 (2014)', img: '/images/2014/9.png' },
                { num: 8, text: 'J. H. Son et al., "Detection of graphene domains and defects using liquid crystals", Nature Comm, 5:3484 (2014)', img: '/images/2014/8.png' },
                { num: 7, text: 'C. K. Lee et al., "Monoatomic Chemical-Vapor-Deposited Graphene Membranes Bridge a Half Millimeter-Scale Gap", ACS Nano, 8(3), 2336-2344 (2014)', img: '/images/2014/7.png' },
                { num: 6, text: 'K. Rana et al., "A graphene-based transparent electrode for use in flexible optoelectronic devices", J. Mater. Chem. C, 2, 2646-2656 (2014)', img: '/images/2014/6.png' },
                { num: 5, text: 'K. Kim et al., "Ultrathin Organic Solar Cells with Graphene Doped by Ferroelectric Polarization", ACS Appl. Mater. Interfaces, 6(5), 3299-3304 (2014)', img: '/images/2014/5.png' },
                { num: 4, text: 'Y. Lee et al., "Synthesis of wafer-scale uniform molybdenum disulfide films with control over the layer number using a gas phase sulfur precursor", Nanoscale, 6, 2821-2826, (2014)', img: '/images/2014/4.png' },
                { num: 3, text: 'Guang-Xin Ni et al., "Tuning Optical Conductivity of Large-Scale CVD Graphene by Strain Engineering",Advanced Materials, 26, 1081-1086 (2014)', img: '/images/2014/3.png' },
                { num: 2, text: 'S.K. Lee et al., "Photo-patternable ion gel-gated graphene transistors and inverters on plastic",Nanotechnology, 25, 014002, (2014)', img: '/images/2014/2.png' },
                { num: 1, text: 'H. Kim et al., "Organic solar cells using CVD-grown graphene electrodes", Nanotechnology, 25, 014012, (2014)', img: '/images/2014/1.png' }
              ])}
            </section>

            <section id="year-2013" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2013</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 17, text: 'N. Gruhler et al., "High-quality Si3N4 circuits as a platform for graphene-based nanophotonic devices",Optics Express, 21, 31678, (2013).', img: '/images/2013/17.png' },
                { num: 16, text: 'J. Son et al., "Conductance modulation in topological insulator Bi2Se3 thin films with ionic liquid gating",Applied Physics Letters, 103, 213114 (2013)', img: '/images/2013/16.png' },
                { num: 15, text: 'C.A. Zaugg et al., "Ultrafast and widely tuneable vertical-external-cavity surface-emitting laser, mode-locked by a graphene-integrated distributed Bragg reflector", Optics Express, 21(25), 31548, (2013).', img: '/images/2013/15.png' },
                { num: 14, text: 'A. Pachoud et al., "Multiple Virtual Tunneling of Dirac Fermions in Granular Graphene", Scientific Reports, 3, 3404 (2013)', img: '/images/2013/14.png' },
                { num: 13, text: 'S.K. Lee et al., "Graphene based Transparent Conductive Film: Status and Perspective", Journal of the Korean Ceramic Society, 50(5), 309-318 (2013).', img: '/images/2013/13.png' },
                { num: 12, text: 'W. Lee et al., "Flexible graphene-PZT ferroelectric nonvolatile memory", Nanotechnology, 24, 475202 (2013)', img: '/images/2013/12.png' },
                { num: 11, text: 'H. Jang et al., "Quantum Confinement Effects in Transferrable Silicon Nanomembranes and Their Applications on Unusual Substrates", Nano Lett., 13, 5600-5607 (2013)', img: '/images/2013/11.png' },
                { num: 10, text: 'Yang Wu et al., "Graphene/liquid crystal based terahertz phase shifters", Optics Express, 21(18), 21402 (2013)', img: '/images/2013/10.png' },
                { num: 9, text: 'H.Y Jang et al., "Fabrication of Metallic Nanomesh: Pt Nano-Mesh as a Proof of Concept for Stretchable and Transparent Electrodes", Chem. Mater., 25, 3535-3538 (2013)', img: '/images/2013/9.png' },
                { num: 8, text: 'B.H. Sharma et al., "Graphene Based Field Effect Transistors: Efforts Made towards Flexible Electronics",Solid State Electronics, 89, 177-188 (2013)', img: '/images/2013/8.png' },
                { num: 7, text: 'Y. Lee et al., "Graphene-based transparent conductive films", Nano: Brief reports and review, 8(3), 1330001 (2013)', img: '/images/2013/7.png' },
                { num: 6, text: 'J. Kwon, et al., "Graphene Based Nanogenerator for Energy Harvesting",Japanese Journal of Applied Physics, 52 (2013)', img: '/images/2013/6.png' },
                { num: 5, text: 'S.H. Bae, et al., "Graphene-P(VDF-TrFE) multilayer film for flexible applications", ACS Nano, 7(4), 3130-3138 (2013)', img: '/images/2013/5.png' },
                { num: 4, text: 'J.E. Lee, et al., "Thermal Stability of Metal Ohmic Contacts in indium-gallium-zinc-oxide Transistors Using a Graphene Barrier Layer", Applied Physics Letters, 102, 113112 (2013)', img: '/images/2013/4.png' },
                { num: 3, text: 'S.K. Lee, et al., "Graphene Films for Flexible Organic and Energy Storage Devices", Journal of Physical Chemistry Letters, 4(5), 831-841 (2013)', img: '/images/2013/3.png' },
                { num: 2, text: 'A. A. Lagatsky, et al., "2 um solid-state laser mode-locked by single-layer graphene", Applied Physics Letters, 102, 013113 (2013)', img: '/images/2013/2.png' },
                { num: 1, text: 'Bhupendra K. Sharma, et al., "Load-Controlled Roll Transfer of Oxide Transistor for Stretchable Electronics", Adv. Func. Mat., 23, 2024-2032 (2013)', img: '/images/2013/1.png' }
              ])}
            </section>

            <section id="year-2012" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2012</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 19, text: 'K. T. Eun, et al., "Mechanical flexibility of zinc oxide thin-film transistors prepared by transfer printing method", Modern Physics Letters B, 26, 1250077 (2012)', img: '/images/2012/19.png' },
                { num: 18, text: 'A. K. Patra, et al., "Dynamic spin injection into chemical vapor deposited graphene", Appl. Phys. Lett., 101, 162407 (2012)', img: '/images/2012/18.png' },
                { num: 17, text: 'Jing Niu, et al., "Shifting of surface plasmon resonance due to electromagnetic coupling between graphene and Au nanoparticles", Optics Express, 20, 18, 19690-19696 (2012)', img: '/images/2012/17.png' },
                { num: 16, text: 'Beom Joon Kim, et al., "Coplanar-Gate Transparent Graphene Transistors and Inverters on Plastic", ACS Nano, 6, 8646-8651 (2012)', img: '/images/2012/16.png' },
                { num: 15, text: 'Junggou Kwon, et al., "A High Performance PZT Ribbon-Based Nanogenerator using Graphene Transparent Electrodes", Energy & Environmental Science, 5, 8970-8975 (2012)', img: '/images/2012/15.png' },
                { num: 14, text: 'Young In Jhon, et al., "The mechanical responses of tilted and non-tilted grain boundaries in graphene",Carbon, 50, 3708-3716 (2012)', img: '/images/2012/14.png' },
                { num: 13, text: 'S.K. Lee, et al., "All Graphene based Thin Film Transistors on Flexible Plastic Substrates", Nano Lett., 12(7), 3472–3476 (2012)', img: '/images/2012/13.png' },
                { num: 12, text: 'Chao Yan, et al., "Graphene-Based Flexible and Stretchable Thin Film Transistors", Nanoscale, 4, 4870–4882 (2012)', img: '/images/2012/12.png' },
                { num: 11, text: 'Yong-Jin Kim, et al., "Low-temperature growth and direct transfer of graphene-graphitic carbon films on flexible plastic substrates", Nanotechnology, 23, 344016 (2012)', img: '/images/2012/11.png' },
                { num: 10, text: 'Byung-Jae Kim, et al., "Numerical Design of SiO2 Bridges in Stretchable Thin Film Transistors" Japanese Journal of Applied Physics, 51, 01AG10 (2012)', img: '/images/2012/10.png' },
                { num: 9, text: 'Dolly Shin, et al., "Synthesis and applications of graphene electrodes" Carbon Letters, 13, 1, 1-16, (2012)', img: '/images/2012/9.png' },
                { num: 8, text: 'Ji Tae Kim, et al., "Three-Dimensional Writing of Highly Stretchable Organic Nanowires", ACS Macro Lett., 1(3), 375–379 (2012)', img: '/images/2012/8.png' },
                { num: 7, text: 'Sukang Bae, et al., "Towards industrial applications of graphene electrodes" Physica Scripta T146, 014024 (2012)', img: '/images/2012/7.png' },
                { num: 6, text: 'Jing Niu, et al., "Graphene induced tunability of the surface plasmon resonance" Appl. Phys. Lett., 100, 061116, (2012).', img: '/images/2012/6.png' },
                { num: 5, text: 'Guang-Xin Ni, et al., "Quasi-Periodic Nanoripples in Graphene Grown by Chemical Vapor Deposition and Its Impact on Charge Transport", ACS Nano, 6(2), 1158–1164 (2012)', img: '/images/2012/5.png' },
                { num: 4, text: 'Jong-Hyun Ahn, et al., "Stretchable electronics: materials, architectures and integrations " J. of Physics D: Appl. Physics, 45, 103001, (2012)', img: '/images/2012/4.png' },
                { num: 3, text: 'Chao Yan, et al., "Mechanical and Environmental Stability of Polymer Thin-Film-Coated Graphene", ACS Nano, 6(3), 2096–2103 (2012)', img: '/images/2012/3.png' },
                { num: 2, text: 'T.H. Han, et al., "Extremely Efficient Flexible Organic Light-emitting Diodes with Modified Graphene Anode" Nature Photonics, 6, 105–110, (2012)', img: '/images/2012/2.png' },
                { num: 1, text: 'W.S. Lim, et al., "Atomic layer etching of graphene for full graphene device fabrication" Carbon, 50, 429-435 (2012)', img: '/images/2012/1.png' }
              ])}
            </section>

            <section id="year-2011" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2011</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 9, text: 'Junmo kang, et al., "High-Performance Graphene-Based Transparent Flexible Heaters", Nano Lett., 11, 5154–5158 (2011)', img: '/images/2011/9.png' },
                { num: 8, text: 'Seoung-Ki Lee, et al., "Stretchable Graphene Transistors with Printed Dielectrics and Gate Electrodes", Nano Lett., 11, 4642–4646 (2011)', img: '/images/2011/8.png' },
                { num: 7, text: 'D.K. Lee, et al., "A Numerical Study on the Mechanical Characteristics of Zinc Oxide-Based Transparent Thin Film Transistors", J. Nanosci. Nanotechnol. 11, 5870 (2011)', img: '/images/2011/7.png' },
                { num: 6, text: 'K.S. Kim, et al., "Chemical Vapor Deposition-Grown Graphene: The Thinnest Solid Lubricant", ACS Nano, 5, 5107–5114 (2011)', img: '/images/2011/6.png' },
                { num: 5, text: 'T. R. Nayak, et al., "Graphene for Controlled and Accelerated Osteogenic Differentiation of Human Mesenchymal Stem Cells", ACS Nano, 5, 4670–4678 (2011)', img: '/images/2011/5.png' },
                { num: 4, text: 'D. K. Lee, et al., "Deformation Characteristics of an Organic Thin Film Transistor", J. Nanosci. Nanotechnol., 11, 239-242 (2011)', img: '/images/2011/4.png' },
                { num: 3, text: 'Sun-Jung Byun, et al., "Graphenes Converted from Polymers", J. Phys. Chem. Lett., 2, 493-497 (2011)', img: '/images/2011/3.png' },
                { num: 2, text: 'Shou-En Zhu, et al., "Graphene-Based Bimorph Microactuators", Nano Letters, 11, 977-981 (2011)', img: '/images/2011/2.png' },
                { num: 1, text: 'Yi Zheng, et al., "Wafer-scale graphene/ferroelectric hybrid devices for low voltage electronics", Euro Phys. Lett., 93, 17002-p1 (2011)', img: '/images/2011/1.png' }
              ])}
            </section>
          </div>
          <div className="mt-32 pt-16 border-t border-slate-200 flex justify-end"><button onClick={onBack} className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"><span>Return to Lab Overview</span><ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" /></button></div>
        </div>
      </div>
    );
  }

  if (period === '2021') {
    const years = ['2026', '2025', '2024', '2023', '2022', '2021'];
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${showTopBtn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'} hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}><ArrowUp size={24} /></button>
        {getCommonHeader("Publications", "Present to 2021")}
        <div className="container mx-auto px-6 max-w-6xl">
          {renderYearNavigation(years)}
          <div className="space-y-32">
            <section id="year-2026" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2026</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 6, text: 'D. Xu,  J. Hong et al.,"Flexible Surface Electrodes for Electrocorticography in Neurological Diseases and Brain-Computer Interface Applications​", Small, in press (2026)', img: '/images/2026/6.png' },
                { num: 5, text: 'M. Xia et al., "Reversible Mechanical and Adhesive Biogels with Ion-electronic Hybrid Conduction and Skin Temperature-Mediated Dynamic Interactions for Multi-Modal and Self-Powered Sensing​", Nano Materials Science​, in press (2026)', img: '/images/2026/5.png' },
                { num: 4, text: 'S. H. Ji et al., "2D TMD-Based Backplane Circuitry for Large-Area Electronics", Small, in press (2026)', img: '/images/2026/4.png' },
                { num: 3, text: 'S. H. Ji, J. Kim and J. Hong et al.,"2D Material-based Memristor Arrays for Flexible and Thermally Stable Neuromorphic Applications​", Small, in press (2026)', img: '/images/2026/3.png' },
                { num: 2, text: 'D. Xu, J. Hong et al., "Two-dimensional semiconductor-based active array for high-fidelity spatiotemporal monitoring of neural activities​". Nat. Mater. in press', img: '/images/2026/2.png' },
                { num: 1, text: 'J. Moon, S. Bae and J. Ryu, et al., "Crack-Free Transfer of Wafer-Scale Freestanding Single-Crystalline Nanomembranes Enabled by Elastically Graded Polymer​", Adv. Mater., in press.', img: '/images/2026/1.png' }
              ])}
            </section>
            <section id="year-2025" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2025</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 12, text: 'J. Lim and A.T. Huang et al., “Dual-step chemical treatment of wafer-scale MOCVD grown monolayer molybdenum disulfides", ACS Nano, 19, 34698 (2025)', img: '/images/2025/12.png' },
                { num: 11, text: 'D. Kim and B. Kim, et al., "Bio-resorbable magnetic tunnel junctions​", Adv. Mater., 37, e07912 (2025)', img: '/images/2025/11.png' },
                { num: 10, text: 'B. Kim, A. Katiyar, and S. Yang et al., "Monolithic 3D Integration via Direct Synthesis of 2D Transition Metal Dichalcogenides​", Device, 100836 (2025)', img: '/images/2025/10.png' },
                { num: 9, text: 'H. Shin et al., "A Wireless Cortical Surface Implant for Diagnosing and Alleviating Parkinson’s Disease Symptoms in Freely Moving Animals", Adv. Healthcare Mater. 2405179, (2025)', img: '/images/2025/9.png' },
                { num: 8, text: 'Y. Zhang et al., "Bioinspired Durable Mechanical-Bioelectrical Dual-Modal Sensors Enabled by Mixed Ion-Electron Conduction and Mechanical Interlocking for Multifunctional Sensing", Adv. Func. Mater., 35, 2501122 (2025)', img: '/images/2025/8.png' },
                { num: 7, text: 'K. Park et al.,"2D Material-based Injectable Sensor for Minimally-invasive Cerebral Blood Flow Monitoring", Small, 21, 2501744 (2025)', img: '/images/2025/7.png' },
                { num: 6, text: 'A. Katiyar et al.,"Strain-Induced Band Gap Narrowing in crumpled TMDs for NIR Light Detection​", Small, 21, 2411378 (2025)', img: '/images/2025/6.png' },
                { num: 5, text: 'A. Katiyar, J. Choi and J.H Ahn,"Recent Advances in CMOS-Compatible Synthesis and Integration of 2D Materials", Nano Convergence, 12, 11 (2025)', img: '/images/2025/5.png' },
                { num: 4, text: 'S.K. Lee and J. H. Ahn, "Two-dimensional Czochralski growth". Nat. Mater., 24, 161 (2025)', img: '/images/2025/4.png' },
                { num: 3, text: 'A. Katiyar, and J.H Ahn, "Strain-Engineered 2D Materials: Challenges, Opportunities, and Future Perspectives"​, Small Method, 202401404 (2025)', img: '/images/2025/3.png' },
                { num: 2, text: 'B. Kim et al., "A flexible active-matrix X-ray detector with a backplane based on two-dimensional materials", Nature electronics, 8, 147 (2025)', img: '/images/2025/2.png' },
                { num: 1, text: 'S. Zhao et al., " Mussel-inspired Highly Sensitive, Stretchable, and Self-healable Yarns Enabled by Conductive Pathways and Encapsulation for Wearable Electronics​", Adv. Func. Mater., 2412461 (2025)', img: '/images/2025/1.png' }
              ])}
            </section>
            <section id="year-2024" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2024</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 13, text: 'D. Kireev, S. Kutagulla, J. Hong, et al., "Atomically Thin Bioelectronics​" Nat. Rev. Mater., 9, 906 (2024)', img: '/images/2024/13.png' },
                { num: 12, text: 'R. Roe et al., "Reconfigurable Logic Gates Capable of Device‐Level Parallel Processing Through Multi‐Input Synaptic Device​​" Adv. Func. Mater., 2312988 (2024)', img: '/images/2024/12.png' },
                { num: 11, text: 'J. Kim, J. Hong, K. Park et al., "Injectable 2D Material-Based Sensor Array for Minimally Invasive Neural Implants​" Advanced Materials, 36, 2400261 (2024)', img: '/images/2024/11.png' },
                { num: 10, text: 'M. Jang et al., "Controlled epitaxy and patterned growth of one-dimensional crystals via surface treatment of two-dimensional templates", npj 2D Materials and Applications, 36 (2024)', img: '/images/2024/10.png' },
                { num: 9, text: 'S. Han. et al., "High energy density in artificial heterostructures through relaxation time modulation", Science, 384, 312 (2024)', img: '/images/2024/9.png' },
                { num: 8, text: 'Y. Liu. et al., "Stretchable hybrid platform‐enabled interactive perception of strain sensing and visualization.", SmartMat, 4, e1247 (2024)', img: '/images/2024/8.png' },
                { num: 7, text: 'J. Ji et al., ​​"Heterogeneous integration of high-k complex-oxide gate dielectrics on wide band-gap high-electron-mobility transistor"​ Communications Engineering, 3, 15 (2024)', img: '/images/2024/7.png' },
                { num: 6, text: 'H.C. Shin et al., "Nonconventional Strain Engineering for Uniform Biaxial Tensile Strain in MoS2 Thin Film Transistors." ACS Nano, 18, 5, 4414​ (2024)', img: '/images/2024/6.png' },
                { num: 5, text: 'A.K. Katiyar et al., "Strain modulation in crumpled Si nanomembranes: Light detection beyond the Si absorption limit." Science Advances, 10, eadg7200 (2024)', img: '/images/2024/5.png' },
                { num: 4, text: 'S.G. Yang. et al., "Neurodiagnostic and neurotherapeutic potential of graphene nanomaterials." Biosensors and Bioelectronics, 115906 (2024)', img: '/images/2024/4.png' },
                { num: 3, text: 'A.K. Katiyar. et al., "2D Materials in Flexible Electronics: Recent Advances and Future Prospectives." Chemical Reviews, 124(2), 318 (2024)', img: '/images/2024/3.png' },
                { num: 2, text: 'S.H. Ji. et al., "Perovskite Light‐Emitting Diode Display Based on MoS2 Backplane Thin‐Film Transistors." Advanced Materials, 2309531 (2024)', img: '/images/2024/2.png' },
                { num: 1, text: 'M. Xia. et al., "Kirigami‐Structured, Low‐Impedance, and Skin‐Conformal Electronics for Long‐Term Biopotential Monitoring and Human–Machine Interfaces.", Advanced Science, 2304871 (2024)', img: '/images/2024/1.png' }
              ])}
            </section>
            <section id="year-2023" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2023</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 10, text: 'J.H. Kang. et al., "Monolithic 3D integration of 2D materials-based electronics towards ultimate edge computing solutions." Nature Materials, 22, 1 (2023)', img: '/images/2023/10.png' },
                { num: 9, text: 'J.Y. Lee, et al., "Ultrathin Crystalline Silicon Nano and Micro Membranes with High Areal Density for Low‐Cost Flexible Electronics.", Small, 2302597 (2023)', img: '/images/2023/9.png' },
                { num: 8, text: 'L. Mawlong et al., "Reduced Defect Density in MOCVD-grown MoS2 by Manipulating the Precursor Phase", ACS Applied Materials & Interfaces, 15, 47359 (2023)', img: '/images/2023/8.png' },
                { num: 7, text: 'A.T. Hoang et al., "Low temperature growth of MoS2 on polymer and thin glass substrates for flexible electronics", Nature Nanotechnology, 18, 1439 (2023)', img: '/images/2023/7.png' },
                { num: 6, text: 'B. Shao et al., "Highly Trustworthy In-sensor Cryptography for Image Encryption and Authentication​​", ACS Nano, 17, 10291 (2023)', img: '/images/2023/6.png' },
                { num: 5, text: 'K. L. Kim et al., "Transparent and Flexible Graphene Pressure Sensor with Self-Assembled Topological Crystalline Ionic Gel​", ACS Applied Materials & Interfaces, 15, 19319 (2023)', img: '/images/2023/5.png' },
                { num: 4, text: 'Y. Luo. et al., "Technology roadmap for flexible sensors", ACS Nano, 17, 5211 (2023)', img: '/images/2023/4.png' },
                { num: 3, text: 'J. Chen. et al., "Optoelectronic graded neurons for bioinspired in-sensor motion perception", Nature Nanotechnology, 18, 882 (2023)', img: '/images/2023/3.png' },
                { num: 2, text: 'D. G. Roe. et al., "Humanlike spontaneous motion coordination of robotic fingers through spatial multi-input spike signal multiplexing", Nat. Com., 14, 5 (2023)', img: '/images/2023/2.png' },
                { num: 1, text: 'J. Lim. et al., "Hybrid graphene electrode for diagnosis and treatment of epilepsy in free-moving animal models", NPG Asia Mate. 15, 7 (2023)', img: '/images/2023/1.png' }
              ])}
            </section>
            <section id="year-2022" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2022</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 2, text: 'H. Kim et al., "Graphene nanopattern as a universal epitaxy platform for single-crystal membrane production and defect reduction", Nature Nanotechnology, 17, 1054 (2022)', img: '/images/2022/2.png' },
                { num: 1, text: 'A. Choi, A. T. Hoang et al., "Residue-free photolithographic patterning of graphene", Chemical Engineering Journal​, 429, 132504 (2022)', img: '/images/2022/1.png' }
              ])}
            </section>
            <section id="year-2021" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2021</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 2, text: 'M. Lee et al., "Graphene-electrode array for brain-map remodeling of cortical surface​", NPG Asia Materials​, 13:65 (2021)', img: '/images/2021/2.png' },
                { num: 1, text: 'J. Kim et al., "Two-Dimensional Materials for Skin Mountable Electronic Devices", Advanced Materials, 005858 (2021)', img: '/images/2021/1.png' }
              ])}
            </section>
          </div>
          <div className="mt-32 pt-16 border-t border-slate-200 flex justify-end"><button onClick={onBack} className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"><span>Return to Lab Overview</span><ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" /></button></div>
        </div>
      </div>
    );
  }

  if (period === '2010') {
    const years = ['2010', '2009', '2008', '2007-2006', '2005-2000', '1990s'];
    return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20 relative">
        <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-50 p-4 bg-[#131C31] text-white rounded-full shadow-2xl transition-all duration-500 transform ${showTopBtn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'} hover:bg-blue-600 hover:-translate-y-1 active:scale-95`}><ArrowUp size={24} /></button>
        {getCommonHeader("Publications", "2010 and earlier")}
        <div className="container mx-auto px-6 max-w-6xl">
          {renderYearNavigation(years)}
          <div className="space-y-32">
            <section id="year-2010" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2010</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 36, text: 'K Chun, et al., "Highly conductive, printable and stretchable composite films of carbon nanotubes and silver", Nature Nanotechnology, 5, 853, (2010).', img: '/images/2010/36.png' },
                { num: 35, text: 'S. Jang, et al., "Flexible, transparent single-walled carbon nanotube transistors with graphene electrodes", Nanotechnology, 21, 425201, (2010).', img: '/images/2010/35.png' },
                { num: 34, text: 'Beom Joon Kim, et al., "High-Performance Flexible Graphene Field Effect Transistors with Ion Gel Gate Dielectrics", Nano Letters, 10, 3464, (2010).', img: '/images/2010/34.png' },
                { num: 33, text: 'Kyungyea Park, et al., "Stretchable, Transparent Zinc Oxide Thin Film Transistor", Advanced Functional Materials, 20, 3577, (2010).', img: '/images/2010/33.png' },
                { num: 32, text: 'S. C. Lee, et al., "Numerical Analysis on the Mechanical Properties of Organic Thin Film Transistor", Modern Physics Letters B, 24, 1471, (2010).', img: '/images/2010/32.png' },
                { num: 31, text: 'Jonghyun Rho, et al., "PbZrxTi1-xO3 Ferroelectric Thin Film Capacitors for Flexible Nonvolatile Memory Applications", IEEE Electron Device Letters., 31, 1017, (2010).', img: '/images/2010/31.png' },
                { num: 30, text: 'Sukang Bae, et al., "Roll-to-roll production of 30-inch graphene film for transparent electrodes", Nat. Nanotech., 5, 574, (2010) (selected as cover).', img: '/images/2010/30.png' },
                { num: 29, text: 'Hasan M, et al., "Low Temperature Aluminum Oxide Gate Dielectric on Plastic Film for Flexible Device Application", Japanese Journal of Applied Physics, 49, 05EA01, (2010).', img: '/images/2010/29.png' },
                { num: 28, text: 'Seoung-Ki Lee, et al., "Mechanically flexible thin film transistors and logic gates on plastic substrates by use of single-crystal silicon wires from bulk wafers.", Applied Physics Letters, 96, 173501, (2010) (selected as cover).', img: '/images/2010/28.png' },
                { num: 27, text: 'Youngbin Lee, et al., "Wafer Scale Synthesis and Transfer of graphene films", Nano Letters, 10, 490-493, (2010).', img: '/images/2010/27.png' },
                { num: 26, text: 'Hasan M, et al., "Hydrogen Defect Passivation of Silicon Transistor on Plastic for High Performance Flexible Device Application", Electrochem. Solid St., 13(3), H80-H82, (2010).', img: '/images/2010/26.png' }
              ])}
            </section>

            <section id="year-2009" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2009</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 25, text: 'Kim H.S, et al., "Self-Assemble Nanodielectrics and Silicon Nanomembranes for Low Voltage, Flexible Transistors and Logic Gates on Plastic Substrates", Applied Physics Letters, 95, 183544, (2009).', img: '/images/2009/25.png' },
                { num: 24, text: 'Lee S.I., et al., "Effect of Homopolymer Molecular Weight on Order-Order Transition in Block Copolymer and Homopolymer Blends", J. Nanosci. Nanotechnol. 9, 7499, (2009).', img: '/images/2009/24.png' },
                { num: 23, text: 'Kim J.E., et al., "Interfacial Change on Morphological Transitions in Styrene-Isoprene Diblock Copolymer", Euro. Polym. J, 45, 2450, (2009).', img: '/images/2009/23.png' },
                { num: 22, text: 'Kim T.-H., et al., "Kinetically Controlled, Adhesiveless Transfer Printing Using Microstructured stamps", Applied Physics Letters, 94, 113502, (2009).', img: '/images/2009/22.png' },
                { num: 21, text: 'Kim K.S., et al., "Large-Scale Pattern Growth of Graphene Films for Stretchable Transparent Electrodes", Nature, 457, 706, (2009)', img: '/images/2009/21.png' }
              ])}
            </section>

            <section id="year-2008" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2008</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 20, text: 'Park S. I., et al., "Theoretical and Experimental Studies of Bending of Inorganic Electronic Materials on Plastic Substrates ", Advanced Functional Materials, 18, 2673, (2008).', img: '/images/2008/20.png' },
                { num: 19, text: 'Ahn J.-H., et al., "Defect Tolerance in Transistors that Use Semiconductor Nanomaterials and Ultrathin Dielectrics", Advanced Functional Materials, 18, 2535, (2008). (selected as inside cover)', img: '/images/2008/19.png' },
                { num: 18, text: 'Kim D.H., et al., "CMOS integrated Circuits Incorporating Monolithically Integrated Stretchable Wavy Interconnects", Applied Physics Letters, 93, 044102, (2008).', img: '/images/2008/18.png' },
                { num: 17, text: 'Baca A.J., et al., "Semiconductor Wires and Ribbons for High Performance Flexible Electronics", Angew. Chem. Int. Ed., 47, 5524, (2008).', img: '/images/2008/17.png' },
                { num: 16, text: 'Kim D.H., et al., "Stretchable and Foldable Silicon Integrated Circuits", Science, 320, 507, (2008).', img: '/images/2008/16.png' },
                { num: 15, text: 'Kim D.H., et al., "Complementary Logic Gates and Ring Oscillators on Plastic Substrates by Use of Printed Ribbons of Single-Crystalline Silicon", IEEE Electron Device Letters, 29, 73, (2008).', img: '/images/2008/15.png' }
              ])}
            </section>

            <section id="year-2007-2006" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2007 - 2006</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 14, text: 'Ahn J.-H., et al., "Bendable Integrated Circuits on Plastic Substrates by Use of Printed Ribbons of Single-Crystalline Silicon", Applied Physics Letters, 90, 213501, (2007). (selected as cover article)', img: '/images/2007/14.png' },
                { num: 13, text: 'Ahn J.-H., et al., "Heterogeneous Three Dimensional Electronics by Use of Printed Semiconductor Nanomaterials", Science, 314, 1754, (2006).', img: '/images/2006/13.png' },
                { num: 12, text: 'Lee K.J., et al., "Bendable GaN High Electron Mobility Transistoron Plastic Substrates ", Journal of Applied Physics, 100, 124507, (2006).', img: '/images/2006/12.png' },
                { num: 11, text: 'Ahn J.-H., et al., "High Speed, Mechanically Flexible Single Crystal Silicon Thin Film Transistors on Plastic Substrates", IEEE Electron Device Letters., 27, 460, (2006).', img: '/images/2006/11.png' }
              ])}
            </section>

            <section id="year-2005-2000" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">2005 - 2000</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 10, text: 'Yang W.-Y., et al., "Supramolecular Barrels from Amphiphilic Rigid-Flexible Macrocycles", Nature Materials, 4, 399, (2005).', img: '/images/2005/10.png' },
                { num: 9, text: 'Kim J.-K., et al., "Liquid Crystalline Assembly from Rigid Wedge-Flexible Coil Diblock Molecules.", Angew. Chem. Int. Ed. 44, 328, (2005)', img: '/images/2005/9.png' },
                { num: 8, text: 'Jin, L.-Y., et al., "Structural Inversion in 3-D Hexagonal Organization of Coil-Rod-Coil Molecule.", Chem. Commun. 1197, (2005)', img: '/images/2005/8.png' },
                { num: 7, text: 'Jin L.-Y., et al., "Shape-Persistent Macromolecular Disks from Reactive Supramolecular Rod-Bundles", J. Am. Chem. Soc. 126, 12208, (2004)', img: '/images/2004/7.png' },
                { num: 6, text: 'Ahn J.-H., et al., "Mechanism of morphological transition from Lamellar/Perforated layer to Gyroid phase", Macromolecular Research, 11, 152, (2003)', img: '/images/2003/6.png' },
                { num: 5, text: 'Ahn J.-H., et al., "Effect of Polyisoprene Molecular Weight on Morphological Transition in Binary Blends of Styrene-Isoprene Diblock Copolymer and Polyisoprene", Macromolecules, 35, 10238, (2002).', img: '/images/2002/5.png' },
                { num: 4, text: 'Ahn J.-H., et al., "The effect of block lengths on micellestructure in blends of styrene-isoprene diblock copolymer and poly(vinyl methylether)", Polymer, 43, 3345, (2002).', img: '/images/2002/4.png' },
                { num: 3, text: 'Ahn J.-H., et al., "Micelle Formation in Mixtures of Styrene-Isoprene Diblock Copolymer and Poly(vinyl methyl ether)", Macromolecules, 34, 4459, (2001).', img: '/images/2001/3.png' },
                { num: 2, text: 'Ahn J.-H., et al., "Structure of shear-induced perforatedlayer phase in styrene-isoprene diblock copolymer melts", Macromolecules, 33, 641, (2000).', img: '/images/2000/2.png' }
              ])}
            </section>

            <section id="year-1990s" className="scroll-mt-40">
              <div className="flex items-center space-x-4 mb-12"><h2 className="text-4xl font-black text-[#131C31]">1990s</h2><div className="h-1 flex-grow bg-blue-600 rounded-full"></div></div>
              {renderPubList([
                { num: 1, text: 'Ahn J.-H., et al., "Phase behaviors in blends of poly(vinyl methyl ether) andpoly(styrene-co-butadiene)", Euro. Polym. J., 33, 1113, (1997).', img: '/images/1997/1.png' }
              ])}
            </section>
          </div>
          <div className="mt-32 pt-16 border-t border-slate-200 flex justify-end"><button onClick={onBack} className="px-10 py-4 bg-[#131C31] text-white rounded-xl hover:bg-blue-600 transition-all font-bold shadow-lg flex items-center space-x-3 group"><span>Return to Lab Overview</span><ArrowLeft size={18} className="rotate-180 transform group-hover:translate-x-1 transition-transform" /></button></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-black text-[#131C31] mb-4">Historical Archives</h2>
      <p className="text-slate-500 mb-8 max-w-md">Detailed archives for this period are being digitized and will be available shortly.</p>
      <button onClick={onBack} className="px-8 py-3 bg-[#131C31] text-white rounded-xl font-bold">Back to Main</button>
    </div>
  );
};

export default PublicationDetail;