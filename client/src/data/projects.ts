export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  features: string[];
  technologies: string[];
  links: {
    linkedin?: string;
    github?: string;
    demo?: string;
    video?: string;
  };
  category: string;
  image?: string;
  imageType?: string;
  projects?: any[];
  applications?: any[];
  userFeatures?: string[];
  adminFeatures?: string[];
  methodology?: string[];
}

export const projectsData: Project[] = [
  // Web Development Projects
  {
    id: 1,
    title: "Homemade Treasure",
    description: "Full-stack e-commerce web application with modular viewer/uploader roles and real-time CRUD operations.",
    detailedDescription: "A comprehensive full-stack e-commerce web application designed to connect local artisans with customers. The platform features distinct user roles including viewers and uploaders, enabling seamless product management and customer interaction.",
    features: [
      "Modular architecture with separate viewer and uploader roles",
      "Real-time CRUD operations for product listings",
      "Advanced image handling and optimization",
      "Shopping cart functionality with persistent storage",
      "Product rating and review system",
      "Order management and tracking",
      "Hosted using Netlify "
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Local Storage", "VSCode", "HTML/CSS"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_webdevelopment-ecommerce-homemadeproducts-activity-7332062155262894080-N79g?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2KRVx3fgY",
      github: "https://github.com/hareshbharadwaj/Homemade_Marketplace_web",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140275/homemade_1751969238298_iiyqku.mp4"
    },
    category: "web-development",
    image: "shopping-cart"
  },
  {
    id: 2,
    title: "Foodie - Food Delivery Platform",
    description: "Full-stack multi-user web application with user and admin modules, featuring cart management and payments.",
    detailedDescription: "A comprehensive food delivery web application developed during training at Corizo. The platform features separate user and admin interfaces, complete order management system, and advanced analytics dashboard.",
    features: [
      "Multi-user authentication system",
      "Separate user and admin dashboards",
      "Shopping cart with persistent storage",
      "Integrated payment gateway",
      "Real-time order tracking",
      "Comprehensive analytics and reporting"
    ],
    technologies: ["JavaScript", "Node.js", "Express.js", "MySQL", "HTML/CSS", "Bootstrap"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_webdevelopment-firstproject-fullstackdevelopment-activity-7260217850185818112-Q0D5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgy",
      github: "https://github.com/hareshbharadwaj/foodie-app",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140271/foodie-major_project_1751968207216_mw3ibj.mp4"
    },
    category: "web-development",
    image: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140271/foodie-major_project_1751968207216_mw3ibj.mp4",
    imageType: "video"
  },
  
  // Computer Vision Projects
  {
    id: 3,
    title: "Hand Detection System",
    description: "Real-time hand tracking application using OpenCV and MediaPipe for gesture recognition.",
    detailedDescription: "Advanced computer vision application that uses MediaPipe for real-time hand detection and tracking. The system can identify hand landmarks and gestures with high precision.",
    features: [
      "Real-time hand tracking with high precision",
      "Hand landmark detection",
      "Gesture recognition capabilities",
      "Smooth input processing and noise reduction",
      "Cross-platform compatibility"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7332114830104961025-Hntg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/CV_hand_detection",
      video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140321/hand_ozzep2.mp4"
    },
    category: "computer-vision",
    image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878604/hand_v0f30w.mp4",
    imageType: "video"
  },
  {
    id: 4,
    title: "Screen Painter",
    description: "Virtual drawing application using hand gestures for precise gesture-based drawing with color selection.",
    detailedDescription: "An innovative drawing application that enables users to draw in the air using hand gestures. Features dynamic color selection and input smoothing for a natural drawing experience.",
    features: [
      "Virtual drawing using hand gestures",
      "Real-time gesture-based drawing interface",
      "Dynamic color selection and palette",
      "Input smoothing for natural drawing",
      "Canvas management and saving capabilities"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7332115199593181184-DKdO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/CV_screen_painter",
      video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140349/painting_rchrvn.mp4"
    },
    category: "computer-vision",
    image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878699/painter_ajlnyf.mp4",
    imageType: "video"
  },
  {
    id: 5,
    title: "Virtual Mouse Control",
    description: "Touchless mouse control system using computer vision and hand tracking for accessibility.",
    detailedDescription: "An accessibility-focused application that enables users to control their computer mouse using hand gestures. Perfect for users with mobility limitations or touchless interaction needs.",
    features: [
      "Touchless mouse cursor control",
      "Gesture-based clicking and scrolling",
      "Calibration for different users",
      "Smooth tracking with noise reduction",
      "Accessibility-focused design"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7332115597421330432-rLu9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/CV_virtual_mouse",
      video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140350/mouse_wlmxfv.mp4"
    },
    category: "computer-vision",
    image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878775/mouse_c85ypl.mp4",
    imageType: "video"
  },

  // ML Research Projects
  {
    id: 6,
    title: "Chronic Kidney Disease Prediction",
    description: "Machine learning model for early detection and prediction of chronic kidney disease using clinical data.",
    detailedDescription: "A comprehensive machine learning research project focused on predicting chronic kidney disease using clinical parameters. The model helps in early detection and prevention strategies.",
    features: [
      "Multi-algorithm comparison and evaluation",
      "Feature importance analysis",
      "Clinical data preprocessing and normalization",
      "Cross-validation and model validation",
      "Performance metrics analysis and visualization"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_machinelearning-healthcare-datascience-activity-7332116061002543104-y4Qn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/ML_chronic_kidney_disease_prediction",
      demo: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140294/ckd_zzhyqj.png"
    },
    category: "ml-research",
    image: "data-analytics"
  },
  {
    id: 7,
    title: "House Price Prediction",
    description: "Advanced regression model for accurate real estate price prediction using multiple property features.",
    detailedDescription: "A sophisticated machine learning model that predicts house prices based on various property characteristics. The project includes comprehensive data analysis and feature engineering.",
    features: [
      "Multiple regression algorithms implementation",
      "Feature engineering and selection",
      "Data visualization and exploratory analysis",
      "Model performance comparison",
      "Real estate market trend analysis"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_machinelearning-realestate-datascience-activity-7332116418341736448-x3Ps?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/ML_house_price_prediction",
      demo: "https://res.cloudinary.com/daajhlxgj/image/upload/v1752140295/house_t8zq6j.png"
    },
    category: "ml-research",
    image: "home"
  },

  // App Development Projects
  {
    id: 8,
    title: "SkillMart - Skill Exchange Platform",
    description: "Flutter-based mobile platform connecting users to exchange skills and services within communities.",
    detailedDescription: "A comprehensive mobile application that facilitates skill exchange within communities. Users can offer their expertise while learning new skills from others, creating a collaborative learning environment.",
    features: [
      "User profile management with skill listings",
      "Skill matching and recommendation system",
      "In-app messaging and communication",
      "Rating and review system",
      "Community-based skill exchange",
      "Location-based service discovery"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Firestore"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_flutter-mobileapp-skilldevelopment-activity-7332117018589777920-5t5T?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/Flutter_skillmart",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140352/skillmart_umfhqj.mp4"
    },
    category: "app-development",
    image: "users"
  },
  {
    id: 9,
    title: "TaskMaster - Task Management App",
    description: "Comprehensive Flutter application for personal and team task management with advanced tracking features.",
    detailedDescription: "A feature-rich task management application built with Flutter. Includes personal task tracking, team collaboration features, and comprehensive progress analytics.",
    features: [
      "Personal and team task management",
      "Priority-based task organization",
      "Progress tracking and analytics",
      "Team collaboration and assignment",
      "Deadline reminders and notifications",
      "Cross-platform synchronization"
    ],
    technologies: ["Flutter", "Dart", "SQLite", "Provider", "Local Notifications"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_flutter-taskmanagement-productivity-activity-7332117372473098241-rT3V?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/Flutter_taskmaster",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140353/taskmaster_mmrxph.mp4"
    },
    category: "app-development",
    image: "clipboard-list"
  },
  {
    id: 10,
    title: "WeatherWise - Weather Forecast App",
    description: "Real-time weather application with location-based forecasts and weather alerts.",
    detailedDescription: "A comprehensive weather application that provides real-time weather information, forecasts, and alerts. Features location-based services and detailed weather analytics.",
    features: [
      "Real-time weather data and forecasts",
      "Location-based weather services",
      "Weather alerts and notifications",
      "7-day forecast with detailed metrics",
      "Weather maps and radar imagery",
      "Personalized weather preferences"
    ],
    technologies: ["Flutter", "Dart", "Weather API", "Geolocator", "Charts"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_flutter-weatherapp-mobiledev-activity-7332117701577814017-gB12?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/Flutter_weatherwise",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140354/weather_ptjvfn.mp4"
    },
    category: "app-development",
    image: "cloud-sun"
  },
  {
    id: 11,
    title: "FitTracker - Fitness Monitoring App",
    description: "Comprehensive fitness tracking application with workout planning and health analytics.",
    detailedDescription: "A complete fitness monitoring solution that helps users track workouts, monitor progress, and achieve fitness goals. Includes workout planning, nutrition tracking, and health analytics.",
    features: [
      "Workout tracking and planning",
      "Exercise library with instructions",
      "Progress monitoring and analytics",
      "Nutrition tracking and calorie counting",
      "Goal setting and achievement tracking",
      "Health metrics visualization"
    ],
    technologies: ["Flutter", "Dart", "SQLite", "Charts", "Camera", "Sensors"],
    links: {
      linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_flutter-fitness-healthtech-activity-7332118028720103424-dL7P?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",
      github: "https://github.com/hareshbharadwaj/Flutter_fittracker",
      demo: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140355/fitness_kdvmys.mp4"
    },
    category: "app-development",
    image: "activity"
  }
];