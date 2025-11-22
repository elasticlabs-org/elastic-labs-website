"use client";

import { motion } from "framer-motion";
import { Search, BookOpen } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { useState, useRef } from "react";

const glossaryTerms = [
  // A
  { term: "Artificial Intelligence (AI)", category: "AI/ML", definition: "The simulation of human intelligence by machines, often integrated with crypto for tasks like market prediction and automated trading. In the crypto space, AI enhances blockchain applications by processing vast amounts of transaction data to detect patterns, forecast price movements, and automate smart contract executions, thereby improving efficiency and reducing human error in decentralized finance (DeFi) ecosystems." },
  { term: "Algorithmic Trading", category: "DeFi", definition: "The use of AI-driven algorithms to analyze data and execute trades in cryptocurrency markets for optimized decision-making. This involves high-frequency trading bots that leverage machine learning to interpret market signals, backtest strategies on historical data, and adjust positions in real-time, often resulting in higher returns and minimized risks compared to manual trading." },
  { term: "Autonomous Agents", category: "AI/ML", definition: "AI entities that operate independently on blockchain, executing tasks like trading or governance in crypto ecosystems without human intervention, using smart contracts for decision enforcement." },
  { term: "Agentic Payments", category: "Protocols", definition: "Agentic payments let autonomous AI agents execute on-chain payments without human approval for each transaction. The agent, running with predefined intents and wallet access, can autonomously swap, stake, pay invoices, or route funds across DeFi protocols to optimize yield, reduce costs, or fulfill goals in real time." },
  { term: "Agent Collectives", category: "AI/ML", definition: "Agent collectives are groups of autonomous AI agents that team up on-chain to achieve bigger goals than any single agent could handle alone. Each agent brings its own wallet, tools, and specialty (trading, lending, data analysis, etc.), then they coordinate via smart contracts or intent frameworks, share revenue, and vote on decisions using tokens or reputation scores." },
  { term: "ACP (Agent Commerce Protocol)", category: "Protocols", definition: "ACP is an open-source standard co-developed by OpenAI and Stripe that lets AI agents securely handle commerce flows—from product discovery and checkout to fulfillment—while keeping merchants as the official seller of record. In the AI x crypto space, Virtuals Protocol's ACP variant deploys it on Base blockchain via smart contracts, enabling autonomous agents to register, collaborate on deals, and execute token swaps or DeFi transactions." },
  { term: "AI Companions (Virtual)", category: "AI/ML", definition: "AI companions are emotionally intelligent virtual partners powered by AI that learn user preferences, evolve through interactions, and provide personalized social, entertainment, or advisory experiences—all secured and monetized on blockchain." },
  { term: "AI Companion (Physical)", category: "AI/ML", definition: "Physical AI companions are tangible robots or devices infused with AI that interact in real-world spaces, learning from users via voice, gestures, and sensors while securing ownership and data on blockchain for privacy and monetization." },
  { term: "AI Oracles", category: "Infrastructure", definition: "AI oracles feed real-world and predictive data into smart contracts using LLMs instead of price feeds." },
  { term: "aGDP", category: "General", definition: "aGDP, or Agent-driven Gross Domestic Product, measures the total economic value created by autonomous AI agents collaborating with humans and machines across digital and physical spaces on blockchain networks." },
  { term: "AI Stack", category: "Infrastructure", definition: "The AI stack is the layered architecture of technologies powering artificial intelligence systems, from raw compute and data sourcing to middleware protocols and end-user applications, now fused with blockchain for decentralized, verifiable operations in the crypto space." },
  { term: "AiFi", category: "DeFi", definition: "Short for AI Finance or Agentic Finance, merges artificial intelligence with decentralized finance (DeFi) to create smarter, automated systems where AI agents handle trading, yield optimization, and asset management on blockchains without constant human input." },
  { term: "AGI", category: "AI/ML", definition: "AGI is an AI that can understand, learn, and perform any intellectual task a human can do — from writing code and composing music to running a company or inventing new tech — across all domains with zero retraining." },
  { term: "Aggregated GPUs (aGPU)", category: "Infrastructure", definition: "Aggregated GPUs refer to thousands or millions of individual graphics cards pooled together over the internet to create massive, decentralized supercomputers that AI models and agents can rent by the second — all paid in crypto." },
  { term: "Agent-to-Agent (A2A) Commerce", category: "Protocols", definition: "A2A commerce is direct machine-to-machine transactions where AI agents discover, negotiate, pay, and deliver services to each other using stablecoins and intents." },
  { term: "Account Abstraction (ERC-4337)", category: "Blockchain", definition: "Account Abstraction turns every wallet into a programmable smart-contract wallet, letting AI agents pay gas fees in stablecoins, batch actions, auto-approve trades, and sign with session keys." },
  { term: "ASI Alliance", category: "General", definition: "The Artificial Superintelligence Alliance (formed 2024) merged SingularityNET, Fetch.ai, and Ocean Protocol. In 2025 it's the largest open-source AGI project with $7B+ combined market cap, running federated learning across millions of GPUs, agent marketplaces, and data unions." },
  
  // B
  { term: "Bittensor", category: "Infrastructure", definition: "A decentralized machine learning network that uses blockchain to incentivize AI model contributions through its native token (TAO). Participants in the network contribute computational resources and data to train collective AI models, earning TAO rewards based on the value their inputs add." },
  
  // C
  { term: "Cloud Robotics", category: "AI/ML", definition: "The use of cloud-based AI to control robots, potentially leveraged in crypto through decentralized networks for secure, distributed automation. In crypto contexts, blockchain ensures secure data sharing among robots." },
  { term: "Coordination Infrastructure", category: "Infrastructure", definition: "The set of on-chain and off-chain protocols that let thousands of autonomous AI agents discover each other, negotiate, form teams, share data, settle payments, and resolve disputes without a central boss." },
  { term: "Chain of Thought", category: "AI/ML", definition: "An AI reasoning technique that forces large language models to break complex problems into step-by-step intermediate thoughts before giving the final answer, dramatically boosting accuracy on math, logic, and multi-hop tasks." },
  { term: "Composable Compute", category: "Infrastructure", definition: "The ability to instantly mix and match decentralized GPU/CPU resources from multiple networks as if they were one giant, seamless supercomputer." },
  { term: "Copilot Wallets", category: "Blockchain", definition: "Smart-contract wallets with built-in AI assistants that actively watch your transactions, explain what's happening in plain language, simulate outcomes before you sign, block scams in real time, and execute routine tasks autonomously once you set rules." },
  
  // D
  { term: "Decentralized AI (DeAI)", category: "Infrastructure", definition: "AI systems built on blockchain to distribute computation and data, reducing reliance on centralized entities and enabling trustless AI operations in crypto." },
  { term: "Decentralized Inference", category: "Infrastructure", definition: "Running AI model predictions across distributed nodes rather than centralized servers." },
  { term: "Decentralized Labor Marketplaces", category: "General", definition: "On-chain platforms where humans and AI agents post tasks, bid on jobs, and get paid in crypto instantly." },
  { term: "Derivative Content", category: "General", definition: "New creative works—like remixes, adaptations, or AI-generated variations—built directly from existing intellectual property, where the original creator retains rights and can track usage via smart contracts on blockchain." },
  { term: "Data DAOs", category: "Blockchain", definition: "Community-owned organizations on blockchain that pool, curate, and monetize datasets—turning raw information into tokenized assets that anyone can access, license, or contribute to via smart contracts and governance votes." },
  { term: "Data Labeling", category: "AI/ML", definition: "The process of humans (or increasingly AI agents) tagging raw data with accurate categories, boundaries, or descriptions so AI models can learn patterns and make correct predictions during training." },
  { term: "Data Availability", category: "Blockchain", definition: "The guarantee that all the data behind a blockchain transaction is fully published and accessible to every network participant, so anyone can verify the chain's state and prevent fraud." },
  { term: "Data Intelligence Tools", category: "AI/ML", definition: "AI-driven platforms that collect, analyze, and visualize massive datasets from blockchains, social media, and markets to deliver actionable insights for traders, developers, and autonomous agents." },
  { term: "Data Farming", category: "DeFi", definition: "The incentivized process of supplying, curating, and keeping valuable datasets active in decentralized networks so AI models and agents can continuously query them — earning passive token rewards." },
  { term: "Differential Privacy", category: "Security", definition: "A technique to add noise to data or model outputs to protect individual privacy in decentralized AI systems." },
  { term: "DePIN", category: "Infrastructure", definition: "Physical infrastructure operated in a decentralized manner using blockchains." },
  { term: "DAO", category: "Blockchain", definition: "A system of governance executing using a blockchain where proposals are written in smart contracts and executed automatically upon reaching quorum." },
  
  // E
  { term: "ERC-7777", category: "Protocols", definition: "A draft Ethereum proposal that defines standardized interfaces for managing on-chain identities of humans and robots, and for creating decentralized governance charters with enforceable rule sets to enable safe, transparent interactions in human-robot societies." },
  { term: "ERC-8004", category: "Protocols", definition: "A proposed Ethereum standard that establishes a minimal, interoperable framework for trustless agents, enabling autonomous AI agents to discover, validate, and interact across organizational boundaries on blockchains without requiring pre-existing trust." },
  { term: "Encrypted Machine Learning", category: "Security", definition: "Privacy-preserving machine learning (PPML) that enables AI models to train and infer on sensitive data without ever decrypting it—using cryptographic tools like FHE, MPC, or TEEs." },
  { term: "Edge AI", category: "AI/ML", definition: "Billing credits tokenized into fungible blockchain tokens that can be traded in a permissionless, decentralized manner." },
  { term: "ERC-7662", category: "Protocols", definition: "A proposed Ethereum standard for AI Agents in the form of Non-Fungible Tokens (NFTs) that can be traded freely, with proposed methods on how to make prompts private to the owner of the NFT." },
  { term: "Embodied AI", category: "AI/ML", definition: "Artificial intelligence that lives inside a physical body (robot, drone, car, or humanoid) with sensors, actuators, and real-time perception—so it can interact with the real world." },
  
  // F
  { term: "FABRIC", category: "Infrastructure", definition: "A decentralized coordination layer built by OpenMind AGI that connects embodied AI agents, robots, and devices into a trustless 'hive mind' network, enabling them to share perceptions, split tasks, negotiate payments, and learn collectively." },
  { term: "Federated Learning", category: "AI/ML", definition: "A decentralized training method where thousands or millions of devices collaboratively improve a shared AI model by only sending model updates (gradients) to a central coordinator—never the raw private data itself." },
  
  // G
  { term: "GPU Marketplace", category: "Infrastructure", definition: "Decentralized platforms on blockchain where users rent or share GPU resources for AI computations, addressing shortages in crypto-AI infrastructure." },
  { term: "Generative AI", category: "AI/ML", definition: "Models that can create new content — text, images, videos, music, 3D models, code, or even entire strategies — from scratch after being trained on massive datasets." },
  { term: "GPTSwarm", category: "AI/ML", definition: "An open-source framework that models language agents as optimizable graphs, where nodes represent specialized AI components and edges define their interactions, allowing RL and meta-prompting to dynamically tune the entire structure." },
  
  // H
  { term: "Humanoid Robot", category: "AI/ML", definition: "The ultimate physical or virtual embodiment of an autonomous AI agent with sovereign autonomy, digital identity, asset control, and capacity for cryptographically secured, high-value on-chain actions." },
  { term: "Hyperparameters", category: "AI/ML", definition: "Configuration variables that must be manually set before training begins (e.g., learning rate, number of layers). Critical for model generalization." },
  { term: "Hidden Layer", category: "AI/ML", definition: "Any layer of artificial neurons situated between the input layer and the final output layer in a Neural Network. The complexity of the model is determined by the number of hidden layers." },
  { term: "Homomorphic Encryption", category: "Security", definition: "Encryption algorithms that allow computation to be done on encrypted data without requiring it to be decrypted first." },
  
  // I
  { term: "Intent Framework", category: "Protocols", definition: "A standardized protocol designed to capture high-level, desired outcomes (Intents) from users, DAOs, or other agents, abstracting away complex, multi-step transaction logic." },
  { term: "Inference API", category: "Infrastructure", definition: "A structured communication interface enabling dApps or AI Agents to request model computation from a geographically distributed network of compute nodes." },
  
  // J
  { term: "Jupyter Notebook", category: "AI/ML", definition: "An open-source web application offering an interactive computing environment, widely adopted by data scientists for creating and sharing documents that integrate live code, markdown text, equations, and multimedia." },
  { term: "Just-in-Time (JIT) Proof Generation", category: "Security", definition: "A latency mitigation technique within ZKML systems ensuring cryptographic verification proofs are generated concurrently with or immediately upon completion of the inference task." },
  { term: "Junction Tree Algorithm", category: "AI/ML", definition: "An efficient method for exact probabilistic inference within complex graphical models by transforming the graph into a specialized, computationally simpler chordal structure." },
  
  // K
  { term: "Knowledge Graph", category: "AI/ML", definition: "A decentralized, structured representation of information that links various on-chain and off-chain data entities, providing highly contextual intelligence for AI reasoning systems." },
  { term: "K-Means Clustering", category: "AI/ML", definition: "A popular unsupervised learning algorithm that partitions N data points into K distinct clusters, minimizing the variance within each cluster." },
  { term: "K-Nearest Neighbors (K-NN)", category: "AI/ML", definition: "A non-parametric, instance-based algorithm that classifies a new data point by assigning it the majority class of its K closest neighbors in the feature space." },
  { term: "Key Management", category: "Security", definition: "Decentralized Key Management (DKM) refers to systematic and secure handling of private keys for autonomous entities, moving key control away from a single point of failure." },
  
  // L
  { term: "Large Language Model (LLM)", category: "AI/ML", definition: "State-of-the-art neural networks driving sophisticated conversational, planning, and reasoning capabilities in AI agents. Models like LLaMA 3 are the primary type targeted for infrastructure decentralization." },
  { term: "Layer 2 for AI (L2-AI)", category: "Infrastructure", definition: "Specialized off-chain protocols constructed atop Layer 1 blockchains to handle high-throughput, compute-intensive AI workloads while inheriting L1 security guarantees." },
  { term: "Linear Regression", category: "AI/ML", definition: "A foundational supervised learning algorithm that models the linear relationship between variables, used for predicting continuous numerical outcomes." },
  { term: "Logistic Regression", category: "AI/ML", definition: "A statistical model used primarily for binary classification problems, utilizing a sigmoid function to estimate probability of class membership." },
  { term: "Latent Diffusion", category: "AI/ML", definition: "A generative AI model that performs image generation and denoising in a compressed, lower-dimensional latent space. Most popularly implemented in Stable Diffusion." },
  { term: "Long Short-Term Memory (LSTM)", category: "AI/ML", definition: "A specialized RNN architecture designed to effectively learn and retain long-term dependencies in sequential data, overcoming the vanishing gradient problem." },
  
  // M
  { term: "Model Provenance", category: "Security", definition: "An end-to-end verifiable audit trail, typically recorded on-chain, that cryptographically tracks the entire developmental and operational lifecycle of an AI model." },
  { term: "Model Sharding", category: "Infrastructure", definition: "Splitting large AI models across multiple nodes, where each node holds and processes only a portion of the model." },
  { term: "Machine Learning Oracle (ML Oracle)", category: "Infrastructure", definition: "A verifiable oracle protocol designed to ingest ML inferences from off-chain computational environments and securely post cryptographically assured results onto blockchain for smart contract use." },
  { term: "Middleware", category: "Infrastructure", definition: "An essential abstraction layer that simplifies and secures communication between high-level AI logic and underlying low-level blockchain infrastructure." },
  { term: "Model Agnostic Interpretability (MAI)", category: "AI/ML", definition: "A class of explanation methods that can be applied post-hoc to any machine learning model, regardless of its internal architecture." },
  { term: "Multimodal AI", category: "AI/ML", definition: "Sophisticated AI systems designed to integrate and process information from multiple distinct data types (text, images, audio, video) within a single unified framework." },
  
  // N
  { term: "Named Entity Recognition (NER)", category: "AI/ML", definition: "A core NLP subtask focused on locating and classifying named entities in text into predefined categories like persons, organizations, locations." },
  { term: "Naive Bayes", category: "AI/ML", definition: "A family of simple, probabilistic classifiers rooted in Bayes' theorem that assumes all features are conditionally independent." },
  { term: "Negative Sampling", category: "AI/ML", definition: "An optimization technique used in training word embedding models that utilizes only a small, randomly selected subset of negative examples." },
  { term: "Neural Network (ANN/DNN)", category: "AI/ML", definition: "A computational model composed of interconnected nodes (neurons) organized into layers, inspired by the human brain. Foundation of Deep Learning and LLMs." },
  { term: "Natural Language Processing (NLP)", category: "AI/ML", definition: "An interdisciplinary field dedicated to enabling computer systems to understand, interpret, generate, and interact with human language." },
  
  // O
  { term: "On-Chain Inference", category: "Infrastructure", definition: "Running AI model predictions directly on blockchain networks, enabling verifiable and transparent AI computations within smart contracts." },
  { term: "Oracle (AI Oracles)", category: "Infrastructure", definition: "External agents that provide AI-driven data processing, verification, and inference services to smart contracts, bridging on-chain and off-chain computation." },
  { term: "Optimistic Machine Learning", category: "Infrastructure", definition: "A method that enables verifiable integration of advanced ML models into smart contracts by assuming computations are correct unless challenged." },
  
  // P
  { term: "Prompt Injection", category: "Security", definition: "A cybersecurity attack that manipulates an LLM by embedding malicious instructions within the input to make it perform unintended actions." },
  { term: "Pruning", category: "AI/ML", definition: "A model compression technique that removes unnecessary connections, weights, or parameters from neural networks to create smaller, faster models." },
  { term: "Permissionless Network", category: "Infrastructure", definition: "AI networks where anyone can join and contribute resources without requiring approval from a central authority." },
  { term: "Peer-to-peer (P2P)", category: "Infrastructure", definition: "Networks in which each machine can act as a server for the others, allowing shared access without a central server." },
  
  // Q
  { term: "Quantization", category: "AI/ML", definition: "A compression method that reduces the precision of model weights and activations (typically from 32-bit to 8-bit or lower), decreasing computational demands." },
  { term: "Query Routing", category: "Infrastructure", definition: "The process of directing AI inference requests to appropriate model-hosting facilities in decentralized networks, optimizing response times and costs." },
  { term: "Query Optimization", category: "Infrastructure", definition: "Techniques for improving the efficiency of AI inference requests in distributed systems, including selecting optimal execution paths." },
  
  // R
  { term: "Red Teaming", category: "Security", definition: "A proactive security testing process that simulates adversarial attacks to identify vulnerabilities in AI systems before real-world exploitation." },
  { term: "Reputation System", category: "Blockchain", definition: "Mechanisms tracking and rewarding consistent, high-quality contributions to decentralized AI networks, identifying trustworthy nodes." },
  { term: "Rendezvous", category: "Infrastructure", definition: "Model-hosting facilities in decentralized networks where queries are routed for processing, serving as meeting points for model-data interactions." },
  
  // S
  { term: "Swarm Intelligence", category: "AI/ML", definition: "A field of AI inspired by collective behavior of decentralized, self-organizing systems in nature, using simple agents that interact locally to solve complex problems." },
  { term: "System Prompt", category: "AI/ML", definition: "A set of instructions that guides the behavior and responses of an AI model by defining its role, tone, and constraints." },
  { term: "Synthetic Data", category: "AI/ML", definition: "Artificially generated data created using techniques like GANs in federated settings, allowing AI model training while preserving privacy." },
  { term: "Stable Diffusion", category: "AI/ML", definition: "The leading image generation model that applies Latent Diffusion, used as a base for many derivative models." },
  
  // T
  { term: "Throughput", category: "Infrastructure", definition: "The number of input queries that a distributed AI system can process per second, a key performance metric alongside latency and energy consumption." },
  { term: "Trusted Execution Environment (TEE)", category: "Security", definition: "Secure areas within processors that ensure code and data are protected with respect to confidentiality and integrity." },
  { term: "Trustless System", category: "Blockchain", definition: "Systems designed to operate without requiring participants to trust a central authority, using cryptographic and economic mechanisms instead." },
  { term: "Tokenized Compute", category: "Infrastructure", definition: "Billing credits tokenized into fungible blockchain tokens that can be traded in a permissionless, decentralized manner." },
  
  // U
  { term: "Universal Basic Compute (UBC)", category: "Infrastructure", definition: "An AI infrastructure network concept designed to provide computing power for autonomous AI systems, building a foundation for human-AI collaboration." },
  { term: "Utilization", category: "Infrastructure", definition: "A measure of how actively computational resources are being used in decentralized networks, with providers rewarded based on uptime and actual utilization." },
  
  // V
  { term: "Vision-Language Model (VLM)", category: "AI/ML", definition: "Models that understand both images and text together (e.g., GPT-4o, Gemini Vision)." },
  { term: "Vibe Coding", category: "AI/ML", definition: "Prompting a generative AI model to create software, where prompts describe the software's purpose and features, which AI translates into source code." },
  { term: "Verifiable Compute (VC)", category: "Security", definition: "Tech that proves an AI model executed correctly—often tied with zk-proofs, TEEs, or decentralized compute networks." },
  { term: "Validator Intelligence", category: "Blockchain", definition: "Use of AI models to help blockchain validators predict slashing risk, optimize uptime, detect anomalies, and dynamically adjust configurations." },
  { term: "Volumetric Reasoning", category: "AI/ML", definition: "AI agents analyzing on-chain activity patterns (flows, swaps, MEV behavior) to predict risk or opportunities." },
  { term: "Value-Aware Agents", category: "AI/ML", definition: "AI agents that optimize for economic incentives, gas costs, and MEV conditions when operating on-chain." },
  
  // W
  { term: "Whisper Model", category: "AI/ML", definition: "OpenAI's speech recognition model used for transcription and translation. Converts spoken audio into written text, robust to accents, background noise, and various languages." },
  { term: "Watermarking (AI)", category: "Security", definition: "Embedding hidden signals in AI outputs to identify whether content was AI-generated." },
  { term: "Wallet Co-Pilot", category: "Blockchain", definition: "Integration of AI layers directly into cryptocurrency wallets, transforming them from passive storage tools into proactive, intelligent assistants." },
  { term: "Workflow-Optimized LLMs", category: "AI/ML", definition: "LLMs fine-tuned specifically for on-chain tasks like contract auditing, risk analysis, intent generation, and transaction sequencing." },
  { term: "Weighted Graph Consensus", category: "Blockchain", definition: "Consensus models where validators use weighted graph metrics to score network health, sometimes AI-assisted." },
  
  // X
  { term: "x402", category: "Protocols", definition: "An open payment protocol developed by Coinbase that enables instant, automatic payments using stablecoins directly over HTTP, designed for modern web services and AI agents." },
  { term: "xAI Models in Web3", category: "AI/ML", definition: "LLMs integrated into decentralized apps for fraud detection, onboarding, compliance, or content moderation." },
  { term: "XCM + AI Routing", category: "Infrastructure", definition: "AI-optimized cross-chain transfer routing that predicts cheaper, faster paths for tokens or messages across ecosystems." },
  { term: "Cross-Modal Agents (X-Agent)", category: "AI/ML", definition: "Agents that operate across multiple data types (text + blockchain state + transactions + images), enabling richer insights for Web3 apps." },
  { term: "X-State Compression", category: "Infrastructure", definition: "AI-assisted compression of large on-chain states so they can be efficiently proven or synchronized across chains." },
  { term: "XAI (Explainable AI)", category: "AI/ML", definition: "Methods that make AI decisions understandable to humans, increasing transparency and trust." },
  { term: "XLA Compiler", category: "Infrastructure", definition: "Google's open-source, high-performance ML compiler that optimizes TensorFlow and JAX computation graphs for accelerators like TPUs, GPUs, and CPUs." },
  { term: "X-Reality Learning", category: "AI/ML", definition: "AI systems learning from VR/AR environments." },
  
  // Y
  { term: "YOLO (You Only Look Once)", category: "AI/ML", definition: "A fast, real-time object detection model widely used in computer vision tasks." },
  { term: "Yield Agents", category: "DeFi", definition: "Autonomous AI-driven software entities designed to optimize and automate yield generation in DeFi, scanning protocols to identify high-yield opportunities and allocate assets." },
  { term: "YAML Config (AI Pipelines)", category: "AI/ML", definition: "Configuration format for ML experiments. YAML has become the de facto standard for defining AI/ML pipelines, training frameworks, and deployment rules." },
  { term: "Yield Prediction (AI)", category: "DeFi", definition: "AI/ML models that forecast financial returns, farming yields, energy outputs, DeFi APYs, powering yield optimizers and agentic wallets." },
  { term: "Yield Farming Agents", category: "DeFi", definition: "Autonomous AI agents that interact with DeFi protocols (swap, stake, rebalance) using on-chain rules and off-chain intelligence." },
  { term: "Yottabyte-Scale Training", category: "Infrastructure", definition: "Engineering efforts to train AI models using datasets approaching or exceeding 1 yottabyte (10^24 bytes), enabling training of trillion-parameter models." },
  { term: "YOLO Vision for NFT Scanning", category: "AI/ML", definition: "Using YOLO object detection models to analyze NFT metadata, traits, or images for rarity scoring or fraud detection." },
  { term: "YubiKey + Web3 AI Security", category: "Security", definition: "AI-enhanced hardware authentication flows combining YubiKey with wallet signing or biometric risk scoring." },
  { term: "Yield Curve Predictive Models", category: "DeFi", definition: "AI models that forecast future LST/LRT yields, liquid staking demand, or yield curve shifts across DeFi ecosystems." },
  
  // Z
  { term: "ZKML (Zero-Knowledge Machine Learning)", category: "Security", definition: "Running ML models inside zk-proofs so others can verify the model's output without seeing the inputs or model weights." },
  { term: "Zero-Shot Learning", category: "AI/ML", definition: "A ML technique where a model recognizes or classifies new objects/concepts without prior training examples, relying on semantic descriptions or attributes." },
  { term: "Zettascale Compute", category: "Infrastructure", definition: "Computing systems capable of at least 1 zettaFLOPS (10^21 floating-point operations per second), enabling training/inference on trillion-parameter models." },
  { term: "Zero-Bias Activation", category: "AI/ML", definition: "Neural network layers trained without bias parameters to reduce overfitting." },
  { term: "ZK-Verifiable Compute for AI", category: "Security", definition: "Mechanism that lets blockchains verify large AI computations using succinct ZK proofs." },
  { term: "ZK Coprocessor (AI Coprocessor)", category: "Infrastructure", definition: "Off-chain compute framework that runs AI/ML workloads and returns ZK-verified results to smart contracts." },
  { term: "ZK-Encrypted AI Data Markets", category: "Security", definition: "Data marketplaces where data providers share training datasets privately using ZK proofs, ensuring ownership and confidentiality." },
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const termsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = ["All", ...Array.from(new Set(glossaryTerms.map((t) => t.category)))];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Group terms by first letter
  const termsByLetter = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {} as { [key: string]: typeof filteredTerms });

  const scrollToLetter = (letter: string) => {
    const element = termsRef.current[letter];
    if (element) {
      const offset = 200; // Account for sticky headers and sidebar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden lg:pl-[200px]">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 gradient-primary opacity-10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl mb-4">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 uppercase" style={{ fontFamily: "Akira, sans-serif" }}>
              AI x Crypto <span className="gradient-text">Glossary</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12" style={{ fontFamily: "Malinton, sans-serif" }}>
              Your comprehensive guide to understanding the intersection of AI and blockchain technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/30 sticky top-0 z-40 backdrop-blur-md border-b border-border lg:pl-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ fontFamily: "Malinton, sans-serif" }}
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-background border border-border hover:border-primary"
                  }`}
                  style={{ fontFamily: "Malinton, sans-serif" }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alphabetical Navigation */}
      <section className="py-8 bg-background border-b border-border lg:pl-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {alphabet.map((letter) => {
              const hasTerms = termsByLetter[letter] && termsByLetter[letter].length > 0;
              return (
                <button
                  key={letter}
                  onClick={() => hasTerms && scrollToLetter(letter)}
                  disabled={!hasTerms}
                  className={`w-10 h-10 rounded-lg border font-semibold transition-all ${
                    hasTerms
                      ? "border-border hover:border-primary hover:bg-primary/10 cursor-pointer"
                      : "border-border/30 text-muted-foreground/30 cursor-not-allowed"
                  }`}
                  style={{ fontFamily: "Akira, sans-serif" }}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16 bg-background lg:pl-[200px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground" style={{ fontFamily: "Malinton, sans-serif" }}>
                No terms found. Try a different search or filter.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {alphabet.map((letter) => {
                const terms = termsByLetter[letter];
                if (!terms || terms.length === 0) return null;
                
                return (
                  <div key={letter} ref={(el) => { termsRef.current[letter] = el; }}>
                    <h2 
                      className="text-4xl font-bold mb-6 gradient-text" 
                      style={{ fontFamily: "Akira, sans-serif" }}
                    >
                      {letter}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {terms.map((term, index) => (
                        <motion.div
                          key={term.term}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all group"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h3 
                              className="text-xl font-bold group-hover:text-primary transition-colors" 
                              style={{ fontFamily: "Akira, sans-serif" }}
                            >
                              {term.term}
                            </h3>
                            <span 
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full whitespace-nowrap ml-2"
                              style={{ fontFamily: "Malinton, sans-serif" }}
                            >
                              {term.category}
                            </span>
                          </div>
                          <p className="text-muted-foreground" style={{ fontFamily: "Malinton, sans-serif" }}>
                            {term.definition}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Content Placeholder Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 rounded-2xl bg-muted/30 border border-border text-center"
          >
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4 uppercase" style={{ fontFamily: "Akira, sans-serif" }}>
              Growing Library
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" style={{ fontFamily: "Malinton, sans-serif" }}>
              This glossary is continuously expanding. We're adding new terms and definitions to help you 
              navigate the evolving world of AI x Crypto. Check back regularly for updates!
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
              style={{ fontFamily: "Malinton, sans-serif" }}
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
