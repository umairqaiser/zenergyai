
export const SIDEBAR_MENU_ITEMS = [
  { name: "Dashboard", path: "/dashboard", icon: "dashboardIcon" },
  { name: "My Clients", path: "/myclients", icon: "clientIcon" },
  { name: "New Assessment", path: "/new-assessment", icon: "assessmentIcon" },
];

export const SIDEBAR_BOTTOM_MENU_ITEMS = [
  { name: "Settings", path: "/settings", icon: "settingIcon" },
  { name: "Get Help", path: "/help", icon: "helpIcon" },
];

export const USER_MENU_OPTIONS = ["Profile", "Account Settings", "Logout"];

export const CLIENT_TABLE_COLUMNS = [
  "Client Name",
  "Phone Number",
  "Assessments",
  "Last Activity",
  "Actions",
];

export const IMPORT_CLIENT_TABLE_COLUMNS = [
  "First Name",
  "Last Name",
  "Email Address",
  "Phone Number",
];

export const ASSESSMENT_STEPS = [
  "Intake Form",
  "Manual Data Input",
  "Upload Data Files",
  "Review",
];

export const MODALITY_TESTS = [
  "Calcaneal",
  "FMS",
  "Force",
  "Gait (Ochy)",
  "Metabolic",
  "Mobility",
  "Strength",
  "Styku",
];

export const ASSESSMENT_STATUS = {
  COMPLETED: "Completed",
  PROCESSING: "Processing",
  REJECTED: "Rejected",
};

export const FMS_ROWS = [
  {
    label: "Active Straight Leg Raise",
    fields: [
      { side: "R", field: "activeStraightLegRaiseR", isPlusMinus: false },
      { side: "L", field: "activeStraightLegRaiseL", isPlusMinus: false },
    ],
  },
  {
    label: "Deep Squat",
    fields: [{ side: "", field: "deepSquat", isPlusMinus: false }],
  },
  {
    label: "Hurdle Step",
    fields: [
      { side: "R", field: "hurdleStepR", isPlusMinus: false },
      { side: "L", field: "hurdleStepL", isPlusMinus: false },
    ],
  },
  {
    label: "Inline Lunge",
    fields: [
      { side: "R", field: "inlineLungeR", isPlusMinus: false },
      { side: "L", field: "inlineLungeL", isPlusMinus: false },
    ],
  },
  {
    label: "Inline Lunge Ankle Pain +/-",
    fields: [
      { side: "R", field: "inlineLungeAnklePainR", isPlusMinus: true },
      { side: "L", field: "inlineLungeAnklePainL", isPlusMinus: true },
    ],
  },
  {
    label: "Inline Lunge Ankle Mobility R-Y-G",
    fields: [
      { side: "R", field: "inlineLungeAnkleMobilityR", isPlusMinus: false },
      { side: "L", field: "inlineLungeAnkleMobilityL", isPlusMinus: false },
    ],
  },
  {
    label: "Rotary Stability",
    fields: [
      { side: "R", field: "rotaryStabilityR", isPlusMinus: false },
      { side: "L", field: "rotaryStabilityL", isPlusMinus: false },
    ],
  },
  {
    label: "Rotary Stability Flexion Clearing +/-",
    fields: [{ field: "rotaryStabilityFlexionClearing", isPlusMinus: true }],
  },
  {
    label: "Shoulder Mobility",
    fields: [
      { side: "R", field: "shoulderMobilityR", isPlusMinus: false },
      { side: "L", field: "shoulderMobilityL", isPlusMinus: false },
    ],
  },
  {
    label: "Shoulder Clearing +/-",
    fields: [
      { side: "R", field: "shoulderClearingR", isPlusMinus: true },
      { side: "L", field: "shoulderClearingL", isPlusMinus: true },
    ],
  },
  {
    label: "Trunk Stability Pushup",
    fields: [{ side: "", field: "trunkStabilityPushup", isPlusMinus: false }],
  },
  {
    label: "Trunk Stability Pushup Extension Clearing +/-",
    fields: [{ field: "trunkStabilityPushupExtensionClearing", isPlusMinus: true }],
  },
];

export const FMS_INITIAL_SCORES = {
  activeStraightLegRaiseR: 0,
  activeStraightLegRaiseL: 0,
  deepSquat: 0,
  hurdleStepR: 0,
  hurdleStepL: 0,
  inlineLungeR: 0,
  inlineLungeL: 0,
  inlineLungeAnklePainR: "",
  inlineLungeAnklePainL: "",
  inlineLungeAnkleMobilityR: 0,
  inlineLungeAnkleMobilityL: 0,
  rotaryStabilityR: 0,
  rotaryStabilityL: 0,
  rotaryStabilityFlexionClearing: "",
  shoulderMobilityR: 0,
  shoulderMobilityL: 0,
  shoulderClearingR: "",
  shoulderClearingL: "",
  trunkStabilityPushup: 0,
  trunkStabilityPushupExtensionClearing: "",
};

export const GAIT_ROWS = [
  { label: "Ground Contact Time (ms)", field: "groundContactTime" },
  { label: "Stride Length (cm)", field: "strideLength" },
  { label: "Vertical Oscillation (cm)", field: "verticalOscillation" },
  { label: "Running Cadence (spm)", field: "runningCadence" },
  { label: "Walk Cadence (spm)", field: "walkCadence" },
  { label: "Walk Deviations", field: "walkDeviations" },
  { label: "Stance Asymmetry (%)", field: "stanceAsymmetry" },
];

export const GAIT_INITIAL_VALUES = {
  groundContactTime: "",
  strideLength: "",
  verticalOscillation: "",
  runningCadence: "",
  walkCadence: "",
  walkDeviations: "",
  stanceAsymmetry: "",
};

export const MOBILITY_INPUT_FIELDS = [
  { label: "Ankle Dorsiflexion (Left)", field: "AnkledorsiFlexionLeft", unit: "deg" },
  { label: "Ankle Dorsiflexion (Right)", field: "AnkledorsiFlexionRight", unit: "deg" },
  { label: "Big Toe Extension (Left)", field: "BigtoeExtensionLeft", unit: "deg" },
  { label: "Big Toe Extension (Right)", field: "BigtoeExtensionRight", unit: "deg" },
  { label: "Hip Internal Rotation (Left)", field: "HipinternalRotationLeft", unit: "deg" },
  { label: "Hip Internal Rotation (Right)", field: "HipinternalRotationRight", unit: "deg" },
];

export const MOBILITY_INITIAL_VALUES = {
  AnkledorsiFlexionLeft: "",
  AnkledorsiFlexionRight: "",
  BigtoeExtensionLeft: "",
  BigtoeExtensionRight: "",
  HipinternalRotationLeft: "",
  HipinternalRotationRight: "",
};

export const METABOLIC_INPUT_FIELDS = [
  { label: "Blood Lactate LT1", field: "bloodlactatelt1", unit: "mmol/L" },
  { label: "Blood Lactate LT2", field: "Bloodlactatelt2", unit: "mmol/L" },
  { label: "Blood Lactate LT1 HR", field: "Bloodlactatelt1Hr", unit: "bpm" },
  { label: "Blood Lactate LT2 HR", field: "Bloodlactatelt2Hr", unit: "bpm" },
];

export const METABOLIC_INITIAL_VALUES = {
  Bloodlactatelt1: "",
  Bloodlactatelt2: "",
  Bloodlactatelt1Hr: "",
  Bloodlactatelt2Hr: "",
};

export const DASHBOARD_STATS = [
  {
    title: "Total Patient",
    description: "Et mollis et fermentum eu",
    percentageChange: "+12.5%",
  },
  {
    title: "Pending Verifications",
    description: "Nisi a condimentum posuere",
    percentageChange: "+12.5%",
  },
  {
    title: "Reports Generated",
    description: "Sed placerat morbi imperdiet",
    percentageChange: "+12.5%",
  },
];

export const TABLE_HEADERS = {
  GAIT: ["GAIT (OCHY)", "RAW SCORE", "FINAL SCORE"],
  FMS: ["FMS SCREEN", "RAW SCORE", "FINAL SCORE"],
};

export const PAGINATION = {
  ROWS_PER_PAGE: 10,
  ASSESSMENT_ROWS_PER_PAGE: 5,
};

export const MOCK_CLIENTS = [
  {
    id: 1,
    name: "Jack Harlow",
    email: "jack@gmail.com",
    phone: "+1 234 567 890",
    assessments: 1,
    lastActivity: "2025-10-20",
    avatar: "",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 987 654 321",
    assessments: 3,
    lastActivity: "2025-11-15",
    avatar: "",
  },
];

export const MOCK_IMPORT_CLIENTS = [
  {
    id: 1,
    firstName: "Jack",
    lastName: "Halow",
    email: "jack@example.com",
    phone: "+16467980373",
  },
];

export const MOCK_ASSESSMENTS = [
  { id: 1, date: "2025-12-05", status: "Completed" },
  { id: 2, date: "2025-12-03", status: "Processing" },
  { id: 3, date: "2025-12-01", status: "Rejected" },
  { id: 4, date: "2025-11-28", status: "Completed" },
  { id: 5, date: "2025-11-25", status: "Processing" },
];

export const NEW_CLIENT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export const SIGNIN_INITIAL_VALUES = {
  email: "",
  password: "",
};
