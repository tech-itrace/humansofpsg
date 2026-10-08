/* =========================================================
   PSG WORLD - DATA FILE
   Put this file at:  public/data/psg-members.js
   It is imported by the PSG World page as:
   /data/psg-members.js
========================================================= */

/* Members come from ABC_Members.csv.
   The CSV has no city column, so everyone is placed in
   DEFAULT_CITY. To put a member in another city, add
   city: "Coimbatore" to that member and add the city
   to CITY_COORDS below. */

export const DEFAULT_CITY = "Chennai";

export const CITY_COORDS = {
  "Chennai": {
    country: "India",
    countryCode: "IN",
    lat: 13.0827,
    lng: 80.2707,
    address: "Chennai, Tamil Nadu, India"
  }
  /* "Coimbatore": { country: "India", countryCode: "IN", lat: 11.0168, lng: 76.9558, address: "Coimbatore, Tamil Nadu, India" }, */
};

export const members = [
  { "name": "Saravan Prabu Periasamy", "phone": "+91 88189 18181", "email": "saravan06psgtech@gmail.com", "batch": "2010", "degree": "B.E", "department": "ECE", "organization": "BetterBy Marketplace Private Limited", "jobTitle": "Co-founder", "industry": "B2B Platform for Architecture, Interior and construction materials", "linkedin": "https://www.linkedin.com/in/saravanprabu" },
  { "name": "Selvakumar Paulraj", "phone": "+91 99624 72162", "email": "selvakumar7188@gmail.com", "batch": "2010", "degree": "B.E", "department": "electronics and communication engineering", "organization": "BetterBy Marketplace pvt ltd", "jobTitle": "co founder", "industry": "B2B Platform for architecture ,interior and construction materials", "linkedin": "https://www.linkedin.com/in/selvakumarpaulraj/" },
  { "name": "Dhandapani Ammasai(Dan)", "phone": "+91 95660 82226", "email": "dammasai@gmail.com", "batch": "1993", "degree": "MCA", "department": "MCA", "organization": "Consultant", "industry": "IT Consulting, Advisory" },
  { "name": "Srinivasan T", "phone": "+91 95001 23262", "email": "tsrinivasan@melss.com", "batch": "1972", "degree": "B.E", "department": "Coimbatore", "organization": "MEL Systems and Services Limited", "industry": "Products and solutions for electronics manufacturing, testing and repairing" },
  { "name": "M Padmanaban", "phone": "+91 99620 51150", "email": "marimuthu.padmanaban@gmail.com", "batch": "1995", "degree": "B.Sc", "department": "Applied Sciences", "organization": "Supamira Infotech Private Limited", "industry": "IT Services/Consulting", "linkedin": "https://www.linkedin.com/in/ipadmanaban/" },
  { "name": "N.Chandrasekaran(Shanks)", "phone": "+91 98400 61561", "email": "ncsekarshanks@gmail.com", "batch": "1966", "degree": "B.E", "department": "Mech", "organization": "Retired", "industry": "Retired" },
  { "name": "Muthu", "phone": "+91 78715 00053", "email": "urfrd31@gmail.com", "batch": "2013", "degree": "B.E", "department": "Electrical and Electronics", "organization": "One touch Solutionss", "industry": "Anti corrosion, Industria Roofing & Retrofitting" },
  { "name": "Madhu.C", "phone": "+91 91719 41611", "email": "redcrosspack@gmail.com", "batch": "1992", "degree": "B.E", "department": "Mech sw", "organization": "Red Cross Packaging", "industry": "Design Manufacturing Die Cut Products and boxes" },
  { "name": "Prabhuram shanmugam", "phone": "+91 98410 12699", "email": "mefco@mefcoindia.com", "batch": "1988", "degree": "B.E", "department": "SW Mechanical", "organization": "Mefco Engineers Pvt Ltd", "industry": "Stainless steel and Mild steel fabricators of equipments and all other vessels", "linkedin": "www.mefcoprabhuram.com" },
  { "name": "Ravindran V", "phone": "+91 63691 31096", "email": "jjlravi@gmail.com", "batch": "1978", "degree": "B.E", "department": "Mechanical", "organization": "Jay Jay Liners", "industry": "Liners" },
  { "name": "A Jeganathasn", "phone": "+91 98406 96067", "email": "Jegana16@gmail.com", "batch": "1979", "degree": "B.E", "department": "Production Engineering", "organization": "SmartTech Insurance Brokers LLp", "industry": "Insurance Broking", "linkedin": "https://www.linkedin.com/in/jeganathan-annamalai-577590168/" },
  { "name": "Karunanithi", "phone": "+91 73586 55815", "email": "dkaruna27@gmail.com", "batch": "1994", "degree": "B.E", "department": "Metallurgy", "organization": "HK POLYTECH SOLUTIONS", "industry": "Merchandise export" },
  { "name": "S Sivakumar", "phone": "+91 93839 99901", "email": "sivakumar@usam.in", "batch": "1988", "degree": "B.E", "department": "4 1st Cross Street, CIT colony , Mylapore, Chennai", "organization": "USAM Technology Solutions Pvt Ltd", "industry": "IT infrastructure solutions provider / CAD Engineering Services", "linkedin": "www.linkedin.com/in/sivakumar-srinivasan-93579721" },
  { "name": "V s Karunakaran", "phone": "+91 98404 45558", "email": "Vskaruna@gmail.com", "batch": "1988", "degree": "B.E", "department": "Mechanical", "organization": "Integral Component manufacturers pvt Ltd", "industry": "Auto components" },
  { "name": "Aditya", "phone": "+91 75488 88101", "email": "aditkv@gmail.com", "batch": "2015", "degree": "B.E", "department": "Mech", "organization": "Sightspectrum", "industry": "IT services" },
  { "name": "Shankar", "phone": "+91 96000 65293", "email": "pshanka1@gmail.com", "batch": "1998", "degree": "B.E", "department": "Mechanical", "organization": "ESFB", "industry": "Services" },
  { "name": "Siddharth Anbuselvan", "phone": "+91 98400 38348", "email": "siddhu8691@yahoo.co.in", "batch": "2014", "degree": "B.E", "department": "(SW) Prod", "organization": "Indsat Corporation", "industry": "Aluminium Foundry & Machining Aluminium Products", "linkedin": "www.linkedin.com/in/siddharth-anbuselvan" },
  { "name": "Suresh. K.G", "phone": "+91 98430 16961", "email": "suresh.k.g@autoprint.co.in", "batch": "1984", "degree": "B.E", "department": "mechanical", "organization": "Old No.23 ,New Number 41,5th Cross,Bharathi Park Road", "industry": "Machinery for print and packaging indistry" },
  { "name": "Arun Athiappan", "phone": "+91 96009 29144", "email": "arunathiappan@gmail.com", "batch": "1992", "degree": "B.E", "department": "SW Mech", "organization": "Working at Amazon as Sr. Software Development Mgr" },
  { "name": "Ganeshan Suppiah", "phone": "+91 96770 07475", "email": "ganeshans@gmail.com", "batch": "1994", "degree": "B.E", "department": "Mechanical (SW)", "organization": "Meenu Subbiah Diamonds LLP", "industry": "Diamond Jewelry Manufacturing & Retailing", "linkedin": "http://linkedin.com/in/ganeshan-suppiah-1b28899a" },
  { "name": "Dr Vedagri Sriram", "phone": "+91 93802 85527", "email": "md@sriramsafety.com", "batch": "1974", "degree": "Diploma", "department": "Mechanical Engineers", "organization": "SRIRAM SAFETY AND QUALITY MANAGEMENT SERVICES PRIVATE LIMITED Vs PRESSURE VESSELS AND GAS PROJECTS PRIVATE LIMITED ANIEL ENGINEERING PRIVATE LIMITED ALG EQUIPMENT", "industry": "We provide expert services as a Competent Person under the Factory Act for testing and certification of equipment and building stability, conducting safety audits, QRA (Quantitative Risk Assessment), HAZOP (Hazard and Operability Study), and safety consul" },
  { "name": "radhakrishnan nambiar", "phone": "+91 99805 70709", "email": "rknamby@gmail.com", "batch": "1984", "degree": "B.E", "department": "EEE", "organization": "Agnus Management Partners", "industry": "Startup Mentor" },
  { "name": "Venkatagiri Nagarajan", "phone": "+91 95000 12291", "email": "nvenk.giri@gmail.com", "batch": "2002", "degree": "B.E", "department": "Sandwich Mechanical", "organization": "1A4 Jains Inseli Park, Old Mahabalipuram Road", "industry": "IT Consulting" },
  { "name": "Jalashree Nallamuthu", "phone": "+91 98406 78250", "email": "njalasree@gmail.com", "batch": "1992", "degree": "B.E", "department": "Civil", "organization": "TN State Highways", "industry": "Public Service - Roads & Infrastructure" },
  { "name": "Sandeep balekai", "phone": "+91 98422 70178", "email": "sandeep@conquestasia.com", "batch": "1987", "degree": "B.Tech", "department": "Textile Technology", "organization": "Conquest Quality systems services Pvt. Ltd", "industry": "Management consultancy , Integrated Busines solution , Quality control and assurance of Textile and apparels" },
  { "name": "S.V.Gopalen", "phone": "+91 98840 62661", "email": "gopalen@gmail.com", "batch": "1964", "degree": "B.E", "organization": "Onload Gears Pvt Ltd", "industry": "Onload Tapchanger and Vacuum Circuit Breaker" },
  { "name": "MANISH RAMAKRISHNAN", "phone": "+91 98407 55846", "email": "manishramakrishnan@yahoo.com", "batch": "1987", "degree": "B.E", "organization": "None", "industry": "Freelance" },
  { "name": "Vijay Subbaiah", "phone": "+91 98840 43330", "email": "pappushal@gmail.com", "batch": "1994", "degree": "B.E", "organization": "Vees Star Diamonds", "industry": "Manufacturing Retailing Diamond Jewelry" },
  { "name": "Sathyamurthi Thambusamy", "phone": "+91 98409 30854", "email": "sathya.thambusamy@gmail.com", "batch": "1955", "degree": "MCA", "department": "MCA", "organization": "6S, SIS Meridian North Block, 100FT BY-PASS Road", "jobTitle": "Sr Software Manager", "industry": "Product" },
  { "name": "Nalini Rajesh", "phone": "+91 99400 33927", "email": "naliniiirajesh@gmail.com", "batch": "1990", "degree": "MBA", "department": "Business Administration", "organization": "Unique Ventures", "jobTitle": "HR Consultant", "industry": "HR Services" },
  { "name": "V Kathiravan", "phone": "+91 98849 85554", "email": "kathir.suganya@gmail.com", "batch": "1999", "degree": "B.E", "department": "Production", "organization": "Techsquad Engineering, Steel Tech Engineering", "industry": "Technical and Commercial consulting for Industrial Products, All kind of Fabrication" },
  { "name": "Panneer selvam Subbiah", "phone": "+91 98412 97730", "email": "panpuv@gmail.com", "batch": "1984", "degree": "B.E", "department": "EEE", "organization": "JL SEAGULL POWER PRODUCTS", "industry": "Elevator / Automotive Industry performance measurement tools distributor", "linkedin": "https://www.linkedin.com/in/panneer-selvam-subbiah-76335115?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { "name": "Kamal Prasath balaji M", "phone": "+91 90253 00550", "email": "kamal@dotworld.in", "batch": "2015", "degree": "B.E", "department": "Robotics and Automation", "organization": "Dotworld technologies pvt ltd", "jobTitle": "CEO", "industry": "Software Development, AR VR. GEN AI, Automotive", "linkedin": "https://www.linkedin.com/in/kpbind" }
];
