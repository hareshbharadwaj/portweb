import { users, projects, type User, type InsertUser, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private currentUserId: number;
  private currentProjectId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.initializeProjects();
  }

  private initializeProjects() {
    const projectsData: InsertProject[] = [
      // Web Development Projects
      {
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
        //imageType: "video"
      },
      
      // Computer Vision Projects
      {
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
          linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7332114830104961025-Hntg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY",// User will fill this
          github: "https://github.com/hareshbharadwaj/CV_hand_detection", // User will fill this
          video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140321/hand_ozzep2.mp4"
        },
        category: "computer-vision",
        image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878604/hand_v0f30w.mp4",
        //imageType: "video"
      },
      {
        title: "Screen Painter",
        description: "Virtual drawing application using hand gestures for precise gesture-based drawing with color selection.",
        detailedDescription: "An innovative drawing application that enables users to draw in the air using hand gestures. Features dynamic color selection and input smoothing for a natural drawing experience.",
        features: [
          "Gesture-based drawing interface",
          "Dynamic color selection system",
          "Input smoothing for natural drawing",
          "Real-time hand tracking",
          "Multiple drawing modes"
        ],
        technologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
        links: {
          linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-gesturerecognition-virtualdrawing-activity-7332274282397417474-Hub2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY", // User will fill this
          github: "https://github.com/hareshbharadwaj/CV_painter", // User will fill this
          video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140175/paint_auwt8s.mp4"
        },
        category: "computer-vision",
        image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878604/paint_f0w00w.mp4",
       // imageType: "video"
      },
      {
        title: "Snake Game with Hand Control",
        description: "Classic snake game with responsive directional control using tracked finger positions.",
        detailedDescription: "A modern take on the classic snake game that uses hand gesture recognition for game controls. Players can control the snake's movement using finger positions for an enhanced gaming experience.",
        features: [
          "Hand gesture-based game controls",
          "Real-time finger position tracking",
          "Responsive directional control",
          "Enhanced gameplay experience",
          "Smooth game mechanics"
        ],
        technologies: ["Python", "OpenCV", "MediaPipe", "Pygame"],
        links: {
          linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_hand-controlled-snake-game-with-opencv-activity-7336788164998479872-scKj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY", // User will fill this
          github: "https://github.com/hareshbharadwaj/CV_snake_game", // User will fill this
          video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140255/snake_llrolb.mp4"
        },
        category: "computer-vision",
        image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878604/snake_f0w00w.mp4",
        //imageType: "video"
      },
      {
        title: "Subway Surfers Hand Control",
        description: "Action-triggered gameplay through real-time gesture recognition for seamless in-game navigation.",
        detailedDescription: "A gesture-controlled clone of the popular Subway Surfers game. Uses real-time hand tracking to control character movements, providing an immersive gaming experience.",
        features: [
          "Real-time gesture recognition",
          "Action-triggered gameplay",
          "Seamless in-game navigation",
          "Hand tracking integration",
          "Smooth character controls"
        ],
        technologies: ["Python", "OpenCV", "MediaPipe", "Pygame"],
        links: {
          linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_computervision-opencv-mediapipe-activity-7339332599707811840-VYjy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY", // User will fill this
          github: "https://github.com/hareshbharadwaj/CV_Subway", // User will fill this
          video: "https://res.cloudinary.com/daajhlxgj/video/upload/v1752140371/subway_h8zcnw.mp4"
        },
        category: "computer-vision",
        image: "https://res.cloudinary.com/dko04npep/video/upload/v1715878604/subway_f0w00w.mp4",
        //imageType: "video"
      },
      
      // Machine Learning Research
      {
        title: "Orbital Collision Risk Prediction",
        description: "Auto-encoder based machine learning classifier to predict satellite-space debris collisions.",
        detailedDescription: "An advanced machine learning system developed for the Star Submit competition at SIMATS. The project uses auto-encoder based hybrid classification to predict potential satellite-space debris collisions, addressing the critical challenge of space debris management.",
        features: [
          "Auto-encoder based feature extraction",
          "Hybrid machine learning classification",
          "Unbalanced dataset handling techniques",
          "Real-time collision risk assessment",
          "Comprehensive data preprocessing pipeline",
          "Model performance optimization"
        ],
        methodology: [
          "Data collection from space tracking databases",
          "Feature engineering for orbital parameters",
          "Auto-encoder implementation for dimensionality reduction",
          "Hybrid classifier training and validation",
          "Performance evaluation and optimization"
        ],
        technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
        links: {
          linkedin: "https://www.linkedin.com/posts/haresh-bharadwaj-r-566556229_machinelearning-spacedebris-aerospaceai-activity-7340638750441357315-hYfh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk2TJ4BoYYKu_vTPlvJrxFLYD2kRVx3fgY", // User will fill this
          github: "", // User will fill this
          paper: "" // User will fill this
        },
        category: "machine-learning",
        image: "satellite"
      },
      
      // App Development
      {
        title: "Healthcare Assistant App",
        description: "Comprehensive healthcare management application with core health monitoring features.",
        detailedDescription: "A healthcare assistant mobile application built with core health features and deployed as a capstone project. The app provides comprehensive health management tools for users.",
        features: [
          "Health metrics tracking",
          "Medication reminders",
          "Appointment scheduling",
          "Emergency contacts",
          "Health data visualization",
          "User-friendly interface"
        ],
        technologies: ["Java", "Android Studio", "SQLite", "Firebase", "Material Design"],
        links: {
          linkedin: "", // User will fill this
          github: "https://github.com/hareshbharadwaj/Healthcare_app/releases/tag/v2.0", // User will fill this
          playstore: "" // User will fill this
        },
        category: "mobile-development",
        image: "android"
      },
      {
        title: "Intelligent Tic-Tac-Toe",
        description: "Classic game with rule-based AI implementation for challenging single-player gameplay.",
        detailedDescription: "A modern implementation of the classic Tic-Tac-Toe game featuring an intelligent AI opponent with rule-based decision making for challenging gameplay.",
        features: [
          "Rule-based AI opponent",
          "Multiple difficulty levels",
          "Game statistics tracking",
          "Smooth animations",
          "Score tracking system",
          "Single-player mode"
        ],
        technologies: ["Java", "Android Studio", "SQLite", "Material Design"],
        links: {
          linkedin: "", // User will fill this
          github: "https://github.com/hareshbharadwaj/tictactoe-android-app/releases/tag/v1.0", // User will fill this
          demo: "" // User will fill this
        },
        category: "mobile-development",
        image: "android"
      },
      {
        title: "Urban Service Booking Platform",
        description: "Service booking application with dual user roles and Streamlit-based worker analytics.",
        detailedDescription: "A comprehensive urban service booking platform with user and admin roles, real-time booking capabilities, secure authentication, and advanced analytics dashboard.",
        features: [
          "User and admin role management",
          "Real-time service booking",
          "Secure authentication system",
          "Rating and review system",
          "Streamlit-based worker analytics",
          "Service provider management"
        ],
        technologies: ["Java", "Android Studio", "Firebase", "Streamlit", "Material Design"],
        links: {
          linkedin: "", // User will fill this
          github: "https://github.com/hareshbharadwaj/Urban_app/releases/tag/v2.0", // User will fill this
          demo: "" // User will fill this
        },
        category: "mobile-development",
        image: "android"
      }
    ];

    projectsData.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      image: insertProject.image || null,
      projects: insertProject.projects || null,
      applications: insertProject.applications || null,
      userFeatures: insertProject.userFeatures || null,
      adminFeatures: insertProject.adminFeatures || null,
      methodology: insertProject.methodology || null,
      detailedDescription: insertProject.detailedDescription || null,
      links: insertProject.links || null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
