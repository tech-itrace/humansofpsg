/* =========================================================
   PSG WORLD - DATA FILE (DUMMY DATA)
   Put this file at:  public/data/psg-members.js
   It is imported by the PSG World page as:
   /data/psg-members.js
========================================================= */

/* All people below are fictional. Phones, emails and LinkedIn
   links are placeholders (example.com / 555-style numbers).

   33 members are split 5 + 5 + 5 + 5 + 5 + 5 + 3 across 7 cities.
   To move a member, change "city" on that member (the city must
   exist in CITY_COORDS below).

   Optional fields: jobTitle, linkedin, phone, email.
   Leave them out (or "") and the page hides them. */

export const DEFAULT_CITY = "Chennai";

export const CITY_COORDS = {
  "Chennai": {
    country: "India",
    countryCode: "IN",
    lat: 13.0827,
    lng: 80.2707,
    address: "Chennai, Tamil Nadu, India"
  },
  "Coimbatore": {
    country: "India",
    countryCode: "IN",
    lat: 11.0168,
    lng: 76.9558,
    address: "Coimbatore, Tamil Nadu, India"
  },
  "Madurai": {
    country: "India",
    countryCode: "IN",
    lat: 9.9252,
    lng: 78.1198,
    address: "Madurai, Tamil Nadu, India"
  },
  "Salem": {
    country: "India",
    countryCode: "IN",
    lat: 11.6643,
    lng: 78.146,
    address: "Salem, Tamil Nadu, India"
  },
  "Tiruchirappalli": {
    country: "India",
    countryCode: "IN",
    lat: 10.7905,
    lng: 78.7047,
    address: "Tiruchirappalli, Tamil Nadu, India"
  },
  "Bengaluru": {
    country: "India",
    countryCode: "IN",
    lat: 12.9716,
    lng: 77.5946,
    address: "Bengaluru, Karnataka, India"
  },
  "Hyderabad": {
    country: "India",
    countryCode: "IN",
    lat: 17.385,
    lng: 78.4867,
    address: "Hyderabad, Telangana, India"
  }
};

export const members = [
  /* ---------- Chennai (5) ---------- */
  { "name": "Arjun Venkatesh", "city": "Chennai", "phone": "+91 90000 10001", "email": "arjun.venkatesh@example.com", "batch": "2010", "degree": "B.E", "department": "ECE", "organization": "Nestly Marketplace Pvt Ltd", "jobTitle": "Co-founder", "industry": "B2B platform for architecture, interior and construction materials", "linkedin": "https://www.linkedin.com/in/dummy-arjun-venkatesh" },
  { "name": "Karthik Raman", "city": "Chennai", "phone": "+91 90000 10002", "email": "karthik.raman@example.com", "batch": "2010", "degree": "B.E", "department": "ECE", "organization": "Nestly Marketplace Pvt Ltd", "jobTitle": "Co-founder", "industry": "B2B platform for architecture, interior and construction materials", "linkedin": "https://www.linkedin.com/in/dummy-karthik-raman" },
  { "name": "Suresh Narayanan", "city": "Chennai", "phone": "+91 90000 10003", "email": "suresh.narayanan@example.com", "batch": "1988", "degree": "B.E", "department": "Mechanical", "organization": "Techvalley Solutions Pvt Ltd", "jobTitle": "Managing Director", "industry": "IT infrastructure and CAD engineering services", "linkedin": "https://www.linkedin.com/in/dummy-suresh-narayanan" },
  { "name": "Venkat Subramanian", "city": "Chennai", "phone": "+91 90000 10004", "email": "venkat.subramanian@example.com", "batch": "2002", "degree": "B.E", "department": "Mechanical (Sandwich)", "organization": "Brightpath Consulting", "jobTitle": "Principal Consultant", "industry": "IT consulting" },
  { "name": "Sathya Murthy", "city": "Chennai", "phone": "+91 90000 10005", "email": "sathya.murthy@example.com", "batch": "1996", "degree": "MCA", "department": "Computer Applications", "organization": "Pixelcraft Software", "jobTitle": "Senior Software Manager", "industry": "Software products" },

  /* ---------- Coimbatore (5) ---------- */
  { "name": "Dhanush Ammai", "city": "Coimbatore", "phone": "+91 90000 20001", "email": "dhanush.ammai@example.com", "batch": "1993", "degree": "MCA", "department": "Computer Applications", "organization": "Independent Consultant", "jobTitle": "Advisor", "industry": "IT consulting and advisory" },
  { "name": "Srinivas Thangavel", "city": "Coimbatore", "phone": "+91 90000 20002", "email": "srinivas.thangavel@example.com", "batch": "1972", "degree": "B.E", "department": "Electrical", "organization": "Meltron Systems Ltd", "jobTitle": "Chairman", "industry": "Electronics manufacturing, testing and repair solutions" },
  { "name": "Padma Nathan", "city": "Coimbatore", "phone": "+91 90000 20003", "email": "padma.nathan@example.com", "batch": "1995", "degree": "B.Sc", "department": "Applied Sciences", "organization": "Supra Infotech Pvt Ltd", "jobTitle": "Director", "industry": "IT services and consulting", "linkedin": "https://www.linkedin.com/in/dummy-padma-nathan" },
  { "name": "Chandran Sekar", "city": "Coimbatore", "phone": "+91 90000 20004", "email": "chandran.sekar@example.com", "batch": "1966", "degree": "B.E", "department": "Mechanical", "organization": "Retired", "industry": "Retired" },
  { "name": "Kumar Govindan", "city": "Coimbatore", "phone": "+91 90000 20005", "email": "kumar.govindan@example.com", "batch": "1984", "degree": "B.E", "department": "Mechanical", "organization": "Autoprint Machinery Pvt Ltd", "jobTitle": "Managing Partner", "industry": "Machinery for the print and packaging industry" },

  /* ---------- Madurai (5) ---------- */
  { "name": "Muthukumar", "city": "Madurai", "phone": "+91 90000 30001", "email": "muthukumar@example.com", "batch": "2013", "degree": "B.E", "department": "Electrical and Electronics", "organization": "Onetouch Solutions", "jobTitle": "Founder", "industry": "Anti-corrosion, industrial roofing and retrofitting" },
  { "name": "Madhavan Chinnasamy", "city": "Madurai", "phone": "+91 90000 30002", "email": "madhavan.c@example.com", "batch": "1992", "degree": "B.E", "department": "Mechanical (Sandwich)", "organization": "Redline Packaging", "jobTitle": "Proprietor", "industry": "Design and manufacturing of die-cut products and boxes" },
  { "name": "Prabhu Shanmugam", "city": "Madurai", "phone": "+91 90000 30003", "email": "prabhu.shanmugam@example.com", "batch": "1988", "degree": "B.E", "department": "Mechanical (Sandwich)", "organization": "Metalfab Engineers Pvt Ltd", "jobTitle": "Managing Director", "industry": "Stainless and mild steel fabrication of equipment and vessels", "linkedin": "https://www.linkedin.com/in/dummy-prabhu-shanmugam" },
  { "name": "Ravi Varadan", "city": "Madurai", "phone": "+91 90000 30004", "email": "ravi.varadan@example.com", "batch": "1978", "degree": "B.E", "department": "Mechanical", "organization": "Star Liners", "jobTitle": "Partner", "industry": "Engine liners" },
  { "name": "Jegan Annamalai", "city": "Madurai", "phone": "+91 90000 30005", "email": "jegan.annamalai@example.com", "batch": "1979", "degree": "B.E", "department": "Production Engineering", "organization": "Safeguard Insurance Brokers LLP", "jobTitle": "Partner", "industry": "Insurance broking", "linkedin": "https://www.linkedin.com/in/dummy-jegan-annamalai" },

  /* ---------- Salem (5) ---------- */
  { "name": "Karunakar Dhandapani", "city": "Salem", "phone": "+91 90000 40001", "email": "karunakar.d@example.com", "batch": "1994", "degree": "B.E", "department": "Metallurgy", "organization": "Polytech Exports", "jobTitle": "Director", "industry": "Merchandise export" },
  { "name": "Vijayakumar Sundaram", "city": "Salem", "phone": "+91 90000 40002", "email": "vijayakumar.s@example.com", "batch": "1988", "degree": "B.E", "department": "Mechanical", "organization": "Integral Components Pvt Ltd", "jobTitle": "Managing Director", "industry": "Auto components" },
  { "name": "Aditya Krishnan", "city": "Salem", "phone": "+91 90000 40003", "email": "aditya.krishnan@example.com", "batch": "2015", "degree": "B.E", "department": "Mechanical", "organization": "Sightline Technologies", "jobTitle": "Delivery Manager", "industry": "IT services" },
  { "name": "Shankar Palaniappan", "city": "Salem", "phone": "+91 90000 40004", "email": "shankar.palaniappan@example.com", "batch": "1998", "degree": "B.E", "department": "Mechanical", "organization": "Unity Finance Bank", "jobTitle": "Regional Manager", "industry": "Banking and financial services" },
  { "name": "Siddharth Anbalagan", "city": "Salem", "phone": "+91 90000 40005", "email": "siddharth.anbalagan@example.com", "batch": "2014", "degree": "B.E", "department": "Production (Sandwich)", "organization": "Indus Alloy Corporation", "jobTitle": "Director", "industry": "Aluminium foundry and machined aluminium products", "linkedin": "https://www.linkedin.com/in/dummy-siddharth-anbalagan" },

  /* ---------- Tiruchirappalli (5) ---------- */
  { "name": "Arun Athreya", "city": "Tiruchirappalli", "phone": "+91 90000 50001", "email": "arun.athreya@example.com", "batch": "1992", "degree": "B.E", "department": "Mechanical (Sandwich)", "organization": "CloudNine Technologies", "jobTitle": "Senior Software Development Manager", "industry": "Software and cloud services" },
  { "name": "Ganesh Subbiah", "city": "Tiruchirappalli", "phone": "+91 90000 50002", "email": "ganesh.subbiah@example.com", "batch": "1994", "degree": "B.E", "department": "Mechanical (Sandwich)", "organization": "Meera Diamonds LLP", "jobTitle": "Managing Partner", "industry": "Diamond jewellery manufacturing and retail", "linkedin": "https://www.linkedin.com/in/dummy-ganesh-subbiah" },
  { "name": "Dr. Vedanth Sriram", "city": "Tiruchirappalli", "phone": "+91 90000 50003", "email": "vedanth.sriram@example.com", "batch": "1974", "degree": "Diploma", "department": "Mechanical", "organization": "Sriram Safety and Quality Management Services Pvt Ltd", "jobTitle": "Managing Director", "industry": "Safety audits, HAZOP, quantitative risk assessment and equipment certification" },
  { "name": "Radhakrishnan Nair", "city": "Tiruchirappalli", "phone": "+91 90000 50004", "email": "radhakrishnan.nair@example.com", "batch": "1984", "degree": "B.E", "department": "EEE", "organization": "Launchpad Management Partners", "jobTitle": "Startup Mentor", "industry": "Startup mentoring" },
  { "name": "Jalaja Nallasamy", "city": "Tiruchirappalli", "phone": "+91 90000 50005", "email": "jalaja.nallasamy@example.com", "batch": "1992", "degree": "B.E", "department": "Civil", "organization": "State Highways Department", "jobTitle": "Executive Engineer", "industry": "Public service, roads and infrastructure" },

  /* ---------- Bengaluru (5) ---------- */
  { "name": "Sandeep Balakrishnan", "city": "Bengaluru", "phone": "+91 90000 60001", "email": "sandeep.balakrishnan@example.com", "batch": "1987", "degree": "B.Tech", "department": "Textile Technology", "organization": "Conquest Quality Systems Pvt Ltd", "jobTitle": "Managing Director", "industry": "Management consultancy and quality assurance for textiles and apparel" },
  { "name": "Gopalan Srinivasan", "city": "Bengaluru", "phone": "+91 90000 60002", "email": "gopalan.srinivasan@example.com", "batch": "1964", "degree": "B.E", "department": "Electrical", "organization": "Powergear Industries Pvt Ltd", "jobTitle": "Chairman", "industry": "On-load tap changers and vacuum circuit breakers" },
  { "name": "Manish Ramesh", "city": "Bengaluru", "phone": "+91 90000 60003", "email": "manish.ramesh@example.com", "batch": "1987", "degree": "B.E", "department": "Mechanical", "organization": "Freelance", "jobTitle": "Independent Consultant", "industry": "Freelance consulting" },
  { "name": "Vijay Subramani", "city": "Bengaluru", "phone": "+91 90000 60004", "email": "vijay.subramani@example.com", "batch": "1994", "degree": "B.E", "department": "Mechanical", "organization": "Starlight Diamonds", "jobTitle": "Proprietor", "industry": "Diamond jewellery manufacturing and retail" },
  { "name": "Nalini Rajan", "city": "Bengaluru", "phone": "+91 90000 60005", "email": "nalini.rajan@example.com", "batch": "1990", "degree": "MBA", "department": "Business Administration", "organization": "Unity Ventures", "jobTitle": "HR Consultant", "industry": "HR services" },

  /* ---------- Hyderabad (3) ---------- */
  { "name": "Kathir Vel", "city": "Hyderabad", "phone": "+91 90000 70001", "email": "kathir.vel@example.com", "batch": "1999", "degree": "B.E", "department": "Production", "organization": "Techsquad Engineering", "jobTitle": "Founder", "industry": "Technical and commercial consulting for industrial products and fabrication" },
  { "name": "Panneer Selvan", "city": "Hyderabad", "phone": "+91 90000 70002", "email": "panneer.selvan@example.com", "batch": "1984", "degree": "B.E", "department": "EEE", "organization": "Seabird Power Products", "jobTitle": "Director", "industry": "Elevator and automotive performance measurement tools distribution", "linkedin": "https://www.linkedin.com/in/dummy-panneer-selvan" },
  { "name": "Kamal Prakash", "city": "Hyderabad", "phone": "+91 90000 70003", "email": "kamal.prakash@example.com", "batch": "2015", "degree": "B.E", "department": "Robotics and Automation", "organization": "Dotverse Technologies Pvt Ltd", "jobTitle": "CEO", "industry": "Software development, AR/VR, GenAI, automotive", "linkedin": "https://www.linkedin.com/in/dummy-kamal-prakash" }
];
