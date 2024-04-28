// creating an array and passing the number, questions, options, and answers
let data = {

    "ai": [{
        "numb": 1,
        "question": "Explain the concept of artificial general intelligence (AGI) and its implications for society. How does AGI differ from narrow AI?",
        "answer": "Human-level AI",
        "options": ["Task-focused AI", "Human-level AI", "Artificial superintelligence", "Machine learning"]
    }, {
        "numb": 2,
        "question": "Discuss the challenges of implementing explainable AI (XAI) systems. How can XAI be achieved, and why is it important for AI development?",
        "answer": "Interpretability, accountability",
        "options": ["Complexity, trust", "Interpretability, accountability", "Transparency, ethics", "Bias, fairness"]
    }, {
        "numb": 3,
        "question": "What are the ethical considerations surrounding AI in autonomous weapons systems? Discuss the potential risks and benefits of deploying such systems.",
        "answer": "Human control, accountability",
        "options": ["Human control, accountability", "Moral responsibility, legality", "Lethality, accuracy", "Risk, benefit"]
    }, {
        "numb": 4,
        "question": "Explain the concept of artificial consciousness and its relevance to AI. Can machines achieve consciousness, and if so, what are the implications?",
        "answer": "Machine sentience, moral rights",
        "options": ["Ethical AI, human-like AI", "Machine sentience, moral rights", "Self-aware AI, cognitive AI", "Philosophical AI, social AI"]
    }, {
        "numb": 5,
        "question": "Describe the concept of AI-driven personalized medicine. How can AI be used to tailor treatments for individuals, and what are the challenges in implementing such systems?",
        "answer": "Precision medicine, patient outcomes",
        "options": ["Data security, efficiency", "Cost-effectiveness, scalability", "Precision medicine, patient outcomes", "Healthcare AI, medical AI"]
    }, {
        "numb": 6,
        "question": "Discuss the challenges and potential solutions in achieving artificial general intelligence (AGI). What are the key differences between AGI and human intelligence?",
        "answer": "Flexibility, adaptation",
        "options": ["Flexibility, adaptation", "Versatility, human-like", "Learning, reasoning", "Problem-solving, creativity"]
    }, {
        "numb": 7,
        "question": "Explain the concept of neuro-symbolic AI and its applications. How does it combine symbolic reasoning with neural networks, and what are the advantages?",
        "answer": "Rule-based AI, knowledge graphs",
        "options": ["Rule-based AI, knowledge graphs", "Interpretable AI, hybrid AI", "Structured data, unstructured data", "Cognitive AI, decision-making"]
    }, {
        "numb": 8,
        "question": "Describe the challenges of AI in natural language understanding (NLU) and generation. How can AI systems improve human-computer interaction through NLU?",
        "answer": "Semantic understanding, context",
        "options": ["Semantic understanding, context", "Language generation, speech recognition", "Dialog systems, chatbots", "Conversational AI, language models"]
    }, {
        "numb": 9,
        "question": "What is the role of AI in robotics and autonomous systems? Discuss the challenges of integrating AI into these systems.",
        "answer": "Task automation, decision-making",
        "options": ["Task automation, decision-making", "Robot perception, sensor fusion", "Control systems, navigation", "Human-robot interaction, safety"]
    }, {
        "numb": 10,
        "question": "Explain the concept of AI in creative industries such as art, music, and literature. How can AI be used to enhance creativity, and what are the limitations?",
        "answer": "Art generation, content creation",
        "options": ["Art generation, content creation", "Music composition, storytelling", "Design, advertising", "Cultural heritage, gaming"]
    }],
    "image": [{
        "numb": 1,
        "question": "Discuss the challenges of image segmentation in medical image processing. How can deep learning techniques improve the accuracy of segmentation tasks?",
        "answer": "Complexity, variability",
        "options": ["Complexity, variability", "Accuracy, speed", "Memory, computation", "Quality, efficiency"]
    }, {
        "numb": 2,
        "question": "Explain the concept of convolutional neural networks (CNNs) in image processing. How do CNNs learn features from images, and what are the advantages over traditional image processing techniques?",
        "answer": "Feature extraction, pattern recognition",
        "options": ["Feature extraction, pattern recognition", "Image enhancement, noise reduction", "Segmentation, classification", "Compression, reconstruction"]
    }, {
        "numb": 3,
        "question": "What are the challenges in image registration and alignment? How can advanced algorithms such as deformable registration improve the accuracy of registration tasks?",
        "answer": "Spatial transformation, image matching",
        "options": ["Spatial transformation, image matching", "Feature extraction, pattern recognition", "Segmentation, classification", "Quality assessment, artifact correction"]
    }, {
        "numb": 4,
        "question": "Describe the concept of image inpainting and its applications in image processing. How can AI techniques be used to fill in missing or damaged parts of an image?",
        "answer": "Damaged restoration, object removal",
        "options": ["Damaged restoration, object removal", "Noise reduction, image enhancement", "Compression, reconstruction", "Segmentation, classification"]
    }, {
        "numb": 5,
        "question": "Explain the challenges of object detection in image processing. How can deep learning models such as YOLO (You Only Look Once) improve the speed and accuracy of object detection tasks?",
        "answer": "Real-time detection, multi-object detection",
        "options": ["Real-time detection, multi-object detection", "Feature extraction, pattern recognition", "Image enhancement, noise reduction", "Segmentation, classification"]
    }, {
        "numb": 6,
        "question": "Discuss the challenges and advancements in image denoising techniques. How can deep learning models be used to remove noise from images?",
        "answer": "Feature extraction, noise reduction",
        "options": ["Feature extraction, noise reduction", "Image enhancement, artifact correction", "Segmentation, classification", "Quality assessment, image restoration"]
    }, {
        "numb": 7,
        "question": "Explain the concept of image stitching and its applications. How can computer vision algorithms be used to create panoramic images from multiple overlapping images?",
        "answer": "Alignment, blending",
        "options": ["Alignment, blending", "Feature extraction, pattern recognition", "Segmentation, classification", "Quality assessment, artifact correction"]
    }, {
        "numb": 8,
        "question": "What are the challenges of image deblurring in image processing? How can deep learning models improve the quality of blurred images?",
        "answer": "Motion estimation, blur kernel estimation",
        "options": ["Motion estimation, blur kernel estimation", "Feature extraction, noise reduction", "Image enhancement, artifact correction", "Segmentation, classification"]
    }, {
        "numb": 9,
        "question": "Describe the concept of image super-resolution and its applications. How can AI techniques be used to enhance the resolution of low-resolution images?",
        "answer": "Detail enhancement, upscaling",
        "options": ["Detail enhancement, upscaling", "Noise reduction, image enhancement", "Compression, reconstruction", "Segmentation, classification"]
    }, {
        "numb": 10,
        "question": "Explain the challenges of image forensics and image authentication. How can digital watermarking techniques be used to verify the authenticity of digital images?",
        "answer": "Forgery detection, tamper detection",
        "options": ["Forgery detection, tamper detection", "Feature extraction, pattern recognition", "Image enhancement, noise reduction", "Segmentation, classification"]
    }],
    "ml": [{
        "numb": 1,
        "question": "Discuss the challenges of imbalanced datasets in machine learning. How can techniques like oversampling and undersampling be used to address this issue?",
        "answer": "Data imbalance, sampling techniques",
        "options": ["Algorithm complexity, model performance", "Data imbalance, sampling techniques", "Feature selection, model evaluation", "Hyperparameter tuning, cross-validation"]
    }, {
        "numb": 2,
        "question": "Explain the concept of transfer learning in machine learning. How can pre-trained models be used to improve the performance of a new, related task?",
        "answer": "Knowledge transfer, fine-tuning",
        "options": ["Feature extraction, pattern recognition", "Knowledge transfer, fine-tuning", "Model evaluation, algorithm selection", "Data preprocessing, model training"]
    }, {
        "numb": 3,
        "question": "What are the challenges of hyperparameter optimization in machine learning? How can techniques like grid search and random search help in finding the optimal hyperparameters?",
        "answer": "Parameter tuning, search strategies",
        "options": ["Algorithm complexity, model performance", "Data preprocessing, model training", "Feature selection, model evaluation", "Parameter tuning, search strategies"]
    }, {
        "numb": 4,
        "question": "Describe the concept of ensemble learning in machine learning. How can techniques like bagging and boosting improve the performance of individual models?",
        "answer": "Model combination, performance improvement",
        "options": ["Algorithm complexity, model performance", "Data imbalance, sampling techniques", "Feature extraction, pattern recognition", "Model combination, performance improvement"]
    }, {
        "numb": 5,
        "question": "Explain the challenges of online learning in machine learning. How can techniques like mini-batch learning and adaptive learning rates be used to address these challenges?",
        "answer": "Continuous learning, model adaptation",
        "options": ["Continuous learning, model adaptation", "Data preprocessing, model training", "Algorithm complexity, model performance", "Feature selection, model evaluation"]
    }, {
        "numb": 6,
        "question": "Discuss the challenges of model selection in machine learning. How can techniques like cross-validation and model evaluation metrics help in choosing the best model?",
        "answer": "Model selection, evaluation metrics",
        "options": ["Model selection, evaluation metrics", "Feature extraction, pattern recognition", "Algorithm complexity, model performance", "Data imbalance, sampling techniques"]
    }, {
        "numb": 7,
        "question": "Explain the concept of deep reinforcement learning in machine learning. How can deep neural networks be combined with reinforcement learning algorithms to solve complex tasks?",
        "answer": "Deep RL, neural networks",
        "options": ["Deep RL, neural networks", "Knowledge transfer, fine-tuning", "Model evaluation, algorithm selection", "Data preprocessing, model training"]
    }, {
        "numb": 8,
        "question": "What are the challenges of model deployment in machine learning? How can techniques like containerization and orchestration help in deploying models at scale?",
        "answer": "Deployment challenges, scalability",
        "options": ["Deployment challenges, scalability", "Partial labeling, unlabeled data", "Model evaluation, algorithm selection", "Data preprocessing, model training"]
    }, {
        "numb": 9,
        "question": "Describe the concept of adversarial machine learning. How can techniques like adversarial training and robust optimization help in defending against adversarial attacks?",
        "answer": "Adversarial training, robust optimization",
        "options": ["Adversarial training, robust optimization", "Task correlation, shared learning", "Feature extraction, pattern recognition", "Model combination, performance improvement"]
    }, {
        "numb": 10,
        "question": "Explain the challenges of time series forecasting in machine learning. How can techniques like recurrent neural networks (RNNs) and long short-term memory (LSTM) networks improve the accuracy of predictions?",
        "answer": "Time series forecasting, RNNs",
        "options": ["Time series forecasting, RNNs", "Outlier detection, anomaly detection", "Algorithm complexity, model performance", "Feature selection, model evaluation"]
    }
    ],
    "mobile": [
        {
            "numb": 1,
            "question": "What are the key challenges in mobile app development? Choose the option that best describes these challenges.",
            "answer": "User interface design, performance optimization",
            "options": [
                "User interface design, performance optimization",
                "Backend development, security",
                "Database management, user authentication",
                "Feature integration, user engagement"
            ]
        },
        {
            "numb": 2,
            "question": "Explain the concept of mobile app monetization. Select the option that correctly defines mobile app monetization strategies.",
            "answer": "In-app purchases, ads",
            "options": [
                "In-app purchases, ads",
                "User engagement, market analysis",
                "Backend development, security",
                "Database management, user authentication"
            ]
        },
        {
            "numb": 3,
            "question": "Describe the importance of mobile app performance optimization. Choose the option that best explains how performance optimization benefits mobile apps.",
            "answer": "Speed, responsiveness",
            "options": [
                "Speed, responsiveness",
                "Feature integration, user engagement",
                "Backend development, security",
                "Database management, user authentication"
            ]
        },
        {
            "numb": 4,
            "question": "What is mobile app localization? Select the option that correctly defines mobile app localization and its benefits.",
            "answer": "Language translation, cultural adaptation",
            "options": [
                "Language translation, cultural adaptation",
                "User engagement, market analysis",
                "Backend development, security",
                "Database management, user authentication"
            ]
        },
        {
            "numb": 5,
            "question": "Discuss the challenges of mobile app security. Choose the option that best describes the challenges and solutions in mobile app security.",
            "answer": "Encryption, secure authentication",
            "options": [
                "Encryption, secure authentication",
                "User engagement, market analysis",
                "Backend development, security",
                "Database management, user authentication"
            ]
        },
        {
            "numb": 6,
            "question": "Discuss the importance of user experience (UX) design in mobile app development. Choose the option that best describes the impact of UX design on app success.",
            "answer": "Engagement, retention",
            "options": [
                "Engagement, retention",
                "Feature integration, performance optimization",
                "Backend development, security",
                "User authentication, database management"
            ]
        },
        {
            "numb": 7,
            "question": "Explain the concept of cloud integration in mobile apps. Select the option that correctly defines the benefits of cloud integration for mobile app development.",
            "answer": "Scalability, flexibility",
            "options": [
                "Flexibility, scalability",
                "User engagement, market analysis",
                "Backend development, security",
                "User authentication, database management"
            ]
        },
        {
            "numb": 8,
            "question": "What are the challenges of cross-platform mobile app development? Choose the option that best describes the challenges and solutions in cross-platform development.",
            "answer": "Compatibility, performance",
            "options": [
                "Performance, compatibility",
                "Feature integration, user engagement",
                "Backend development, security",
                "User authentication, database management"
            ]
        },
        {
            "numb": 9,
            "question": "Describe the concept of mobile app analytics. Select the option that correctly defines the role of analytics in improving app performance.",
            "answer": "Data-driven insights, user behavior",
            "options": [
                "User behavior, data-driven insights",
                "User engagement, market analysis",
                "Backend development, security",
                "User authentication, database management"
            ]
        },
        {
            "numb": 10,
            "question": "Discuss the challenges of integrating AI into mobile apps. Choose the option that best describes the benefits and challenges of AI integration in mobile app development.",
            "answer": "Personalization, complexity",
            "options": [
                "Complexity, personalization",
                "Feature integration, user engagement",
                "Backend development, security",
                "User authentication, database management"
            ]
        }
    ],
    "cloud": [
        {
            "numb": 1,
            "question": "Discuss the key challenges in cloud migration. Choose the option that best describes these challenges.",
            "answer": "Data migration, compatibility issues",
            "options": [
                "Data migration, compatibility issues",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 2,
            "question": "Explain the concept of serverless computing in the cloud. Select the option that correctly defines serverless computing and its benefits.",
            "answer": "Event-driven, cost-effective",
            "options": [
                "Event-driven, cost-effective",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 3,
            "question": "What are the challenges of cloud security? Choose the option that best describes the challenges and solutions in ensuring cloud security.",
            "answer": "Data protection, access control",
            "options": [
                "Data protection, access control",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 4,
            "question": "Describe the concept of hybrid cloud. Select the option that correctly defines hybrid cloud and its advantages.",
            "answer": "Combination, workload optimization",
            "options": [
                "Combination, workload optimization",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 5,
            "question": "Discuss the challenges of cloud governance. Choose the option that best describes the challenges of managing cloud resources.",
            "answer": "Resource allocation, compliance",
            "options": [
                "Resource allocation, compliance",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 6,
            "question": "Explain the concept of cloud orchestration. Select the option that correctly defines cloud orchestration and its benefits.",
            "answer": "Automation, scalability",
            "options": [
                "Automation, scalability",
                "Flexibility, scalability",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 7,
            "question": "What are the challenges of cloud networking? Choose the option that best describes the challenges and solutions in cloud networking.",
            "answer": "Latency, bandwidth",
            "options": [
                "Latency, bandwidth",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 8,
            "question": "Describe the concept of cloud cost management. Select the option that correctly defines cloud cost management and its importance.",
            "answer": "Optimization, cost control",
            "options": [
                "Optimization, cost control",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 9,
            "question": "Discuss the challenges of cloud data storage. Choose the option that best describes the challenges and solutions in storing data in the cloud.",
            "answer": "Scalability, data protection",
            "options": [
                "Scalability, data protection",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        },
        {
            "numb": 10,
            "question": "Explain the concept of cloud disaster recovery. Select the option that correctly defines cloud disaster recovery and its benefits.",
            "answer": "Resilience, data protection",
            "options": [
                "Resilience, data protection",
                "Scalability, flexibility",
                "Security, compliance",
                "User authentication, database management"
            ]
        }
    ],
    "iot": [
        {
            "numb": 1,
            "question": "What are the key challenges in IoT implementation? Choose the option that best describes these challenges.",
            "answer": "Interoperability, security",
            "options": [
                "Interoperability, security",
                "Scalability, flexibility",
                "Data management, analytics",
                "User authentication, device management"
            ]
        },
        {
            "numb": 2,
            "question": "Explain the concept of edge computing in IoT. Select the option that correctly defines edge computing and its benefits.",
            "answer": "Real-time processing, reduced latency",
            "options": [
                "Real-time processing, reduced latency",
                "Scalability, flexibility",
                "Data management, analytics",
                "User authentication, device management"
            ]
        },
        {
            "numb": 3,
            "question": "What are the challenges of IoT security? Choose the option that best describes the challenges and solutions in ensuring IoT security.",
            "answer": "Data protection, device authentication",
            "options": [
                "Data protection, device authentication",
                "Scalability, flexibility",
                "Interoperability, security",
                "User authentication, device management"
            ]
        },
        {
            "numb": 4,
            "question": "Describe the concept of IoT data management. Select the option that correctly defines IoT data management and its importance.",
            "answer": "Data aggregation, analytics",
            "options": [
                "Data aggregation, analytics",
                "Scalability, flexibility",
                "Interoperability, security",
                "User authentication, device management"
            ]
        },
        {
            "numb": 5,
            "question": "Discuss the challenges of IoT device management. Choose the option that best describes the challenges of managing IoT devices.",
            "answer": "Scalability, firmware updates",
            "options": [
                "Scalability, firmware updates",
                "Interoperability, security",
                "Data management, analytics",
                "User authentication, device management"
            ]
        },
        {
            "numb": 6,
            "question": "Explain the concept of IoT connectivity protocols. Select the option that correctly defines IoT connectivity protocols and their use cases.",
            "answer": "MQTT, CoAP",
            "options": [
                "MQTT, CoAP",
                "Scalability, flexibility",
                "Data management, analytics",
                "User authentication, device management"
            ]
        },
        {
            "numb": 7,
            "question": "What are the challenges of IoT scalability? Choose the option that best describes the challenges and solutions in scaling IoT deployments.",
            "answer": "Resource management, network congestion",
            "options": [
                "Resource management, network congestion",
                "Scalability, flexibility",
                "Interoperability, security",
                "User authentication, device management"
            ]
        },
        {
            "numb": 8,
            "question": "Describe the concept of IoT analytics. Select the option that correctly defines IoT analytics and its role in extracting insights from IoT data.",
            "answer": "Data processing, pattern recognition",
            "options": [
                "Data processing, pattern recognition",
                "Scalability, flexibility",
                "Interoperability, security",
                "User authentication, device management"
            ]
        },
        {
            "numb": 9,
            "question": "Discuss the challenges of IoT interoperability. Choose the option that best describes the challenges and solutions in ensuring interoperability among IoT devices.",
            "answer": "Standardization, protocol compatibility",
            "options": [
                "Standardization, protocol compatibility",
                "Scalability, flexibility",
                "Data management, analytics",
                "User authentication, device management"
            ]
        },
        {
            "numb": 10,
            "question": "Explain the concept of IoT energy efficiency. Select the option that correctly defines IoT energy efficiency and its importance.",
            "answer": "Power consumption, sustainability",
            "options": [
                "Power consumption, sustainability",
                "Scalability, flexibility",
                "Interoperability, security",
                "User authentication, device management"
            ]
        }
    ],
    "cyber": [
        {
            "numb": 1,
            "question": "Discuss the key challenges in cybersecurity. Choose the option that best describes these challenges.",
            "answer": "Data breaches, malware",
            "options": [
                "Data breaches, malware",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 2,
            "question": "Explain the concept of encryption in cybersecurity. Select the option that correctly defines encryption and its role in securing data.",
            "answer": "Data protection, confidentiality",
            "options": [
                "Data protection, confidentiality",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 3,
            "question": "What are the challenges of cloud security? Choose the option that best describes the challenges and solutions in ensuring cloud security.",
            "answer": "Data protection, access control",
            "options": [
                "Data protection, access control",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 4,
            "question": "Describe the concept of ransomware attacks. Select the option that correctly defines ransomware and its impact on cybersecurity.",
            "answer": "Data encryption, extortion",
            "options": [
                "Data encryption, extortion",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 5,
            "question": "Discuss the challenges of mobile security. Choose the option that best describes the challenges and solutions in securing mobile devices.",
            "answer": "Data protection, device management",
            "options": [
                "Data protection, device management",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 6,
            "question": "Explain the concept of phishing attacks. Select the option that correctly defines phishing and its impact on cybersecurity.",
            "answer": "Social engineering, deception",
            "options": [
                "Social engineering, deception",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 7,
            "question": "What are the challenges of IoT security? Choose the option that best describes the challenges and solutions in securing IoT devices.",
            "answer": "Data privacy, device authentication",
            "options": [
                "Data privacy, device authentication",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 8,
            "question": "Describe the concept of zero-day vulnerabilities. Select the option that correctly defines zero-day vulnerabilities and their impact on cybersecurity.",
            "answer": "Unpatched software, exploits",
            "options": [
                "Unpatched software, exploits",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 9,
            "question": "Discuss the challenges of insider threats. Choose the option that best describes the challenges and solutions in mitigating insider attacks.",
            "answer": "Data theft, malicious intent",
            "options": [
                "Data theft, malicious intent",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        },
        {
            "numb": 10,
            "question": "Explain the concept of cybersecurity risk management. Select the option that correctly defines risk management in cybersecurity.",
            "answer": "Threat assessment, mitigation",
            "options": [
                "Threat assessment, mitigation",
                "Network security, encryption",
                "User authentication, access control",
                "Security policies, compliance"
            ]
        }
    ]

};


const categories = {"ai":"Artificial Intelligence", "image":"Image Processing", "ml":"Machine Learning", "mobile": "Mobile App Development", "cloud":"Cloud Computing", "iot":"Internet Of Things", "cyber":"Cyber Security"};

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");


var username;
var buttonValue;
var questions;

// if startQuiz button clicked
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' + '<div class="option"><span>' + questions[index].options[1] + '</span></div>' + '<div class="option"><span>' + questions[index].options[2] + '</span></div>' + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer) {
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items

    if (userAns == correcAns) { //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) { // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Congrats!, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    } else if (userScore > 1) { // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else { // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if (time < 9) { //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if (time < 0) { //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent === correcAns) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);

    function timer() {
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


function sendData(button) {
    username = document.getElementById('username').value;
    buttonValue = button.value;
    questions = data[buttonValue];
    console.log("Username:", username, "Button Value:", buttonValue);
}



function addTextToImage() {
        const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const mark = userScore;
    const name = username;
    const domain = categories[buttonValue];

    const image = new Image();
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);

            ctx.font = 'bold 40px Arial';

            ctx.fillStyle = 'black';
            ctx.fillText(domain, 1360, 882);
            ctx.fillText(mark, 1220, 940);

            ctx.font = 'bold 60px Arial';
            const textWidth = ctx.measureText(name).width;
            const x = (canvas.width - textWidth) / 2;
            ctx.fillText(name, x, 750);


            document.getElementById('output').src = canvas.toDataURL();
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'certificate.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
        };
        image.src = 'certificate.png';

}
