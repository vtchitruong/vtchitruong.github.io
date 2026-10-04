---
icon: octicons/ai-model-24
grade: "lớp 12"
grade_url: "/grade-12/grade-12-index/"

level: "phổ thông"
level_url: "/grade-12/grade-12-index/"

difficulty: "easy"
updated: "04/10/2026"
---

# Introduction to artificial intelligence

!!! abstract "Abstract"

    This lesson provides an overview of artificial intelligence, including:

    - The concept of artificial intelligence
    - The capabilities of artificial intelligence
    - The classification of artificial intelligence

## Concept

!!! note "Artificial Intelligence"

    A branch of computer science focused on the **research and development of intelligent systems** capable of performing **tasks that require human-like intelligence** (1). Hereinafter abbreviated as **AI**.
    { .annotate }

    1.  Capabilities requiring human-like intelligence include:

        - Learning
        - Reasoning
        - Perception
        - Problem-solving
        - Self-adaptation

---

## Capabilities

An AI system primarily possesses the following capabilities:

```kroki-plantuml
@startmindmap

<style>
mindmapDiagram {
  BackGroundColor transparent      /* works well with Material's light/dark themes */

  node {
    BackgroundColor #E3F2FD
    LineColor #1E88E5
    LineThickness 0.5
    FontColor #0D47A1
    FontSize 14
    RoundCorner 48                 /* border-radius: 0 = square, higher = rounder */
    Padding 10
    Margin 4
  }

  :depth(0) {                      /* root node */
    BackgroundColor #4682b4
    LineColor #4682b4
    FontColor white
    FontSize 16
    RoundCorner 48
  }

  :depth(1) {                      /* level-1 groups */
    BackgroundColor transparent
    LineColor #464e56
    FontColor #464e56
    RoundCorner 48
  }

  :depth(2) {                      /* leaf nodes */
    BackgroundColor #E8F5E9
    LineColor #43A047
    FontColor #1B5E20
    RoundCorner 8
  }

  arrow {                          /* connector lines */
    LineColor #9E9E9E
    LineThickness 2
  }
}
</style>

* AI capabilities
left side
**:==Acquisition and processing
*** Learning
*** Perception
*** Analysis
;
**:==Reasoning and decision-making
*** Reasoning
*** Decision-making
*** Generalization
;
right side
**:==Execution and interaction
*** Automation
*** Autonomy
*** Interaction
*** Creativity
;
@endmindmap
```

??? info "Acquisition and processing capabilities"

    <div class="grid cards" markdown>

    -   :material-school:{ .lg .middle } **Learning**
        
        Acquiring new knowledge, skills, or patterns through exposure to data and training processes.

        Enables the system to automatically improve its performance and accuracy over time without requiring explicit manual reprogramming.

    -   :material-eye:{ .lg .middle } **Perception**

        Acquiring and interpreting data from the environment through sensors.

        Serves as the foundation of computer vision as well as audio and speech processing.

    -   :material-chart-bar:{ .lg .middle } **Analysis**

        Extracting and processing large volumes of data to discover underlying relationships, patterns, or trends.

        Assists humans in understanding complex datasets and making predictions.

    </div>

??? info "Reasoning and decision-making capabilities"

    <div class="grid cards" markdown>

    -   :material-head-cog:{ .lg .middle } **Reasoning**

        Applying logical rules to draw conclusions, solve problems, or derive interpretations from available information.

        Going beyond mere data matching to engage in logical reasoning processes.

    -   :material-lightning-bolt:{ .lg .middle } **Decision-making**

        Evaluating options, weighing risks or benefits, and automatically selecting optimal choices aligned with defined goals.

        Providing recommendations or executing actions automatically in real time.

    -   :material-transit-connection-variant:{ .lg .middle } **Generalization**

        Applying learned skills or knowledge from familiar contexts to entirely new situations.

    </div>

??? info "Execution and interaction capabilities"

    <div class="grid cards" markdown>

    -   :material-cogs:{ .lg .middle } **Automation**

        Executing complex processes or tasks at scale with high speed and consistent precision.

        Relieving humans of tedious, repetitive tasks and optimizing labor productivity.

    -   :material-robot-industrial:{ .lg .middle } **Autonomy**

        Operating independently and navigating dynamic environments without human intervention.

        Typical applications: autonomous vehicles, exploration robots, and search-and-rescue drones.

        Enabling systems to flexibly adapt to unseen situations not present in their training datasets.

    -   :material-forum:{ .lg .middle } **Interaction**

        Understanding language and communicating naturally with humans through the subfield of natural language processing.

        Assisting in conversation via text, speech, or gestures.

    -   :material-palette:{ .lg .middle } **Creativity**
        
        Leveraging generative AI models to synthesize and transform data.

        Generating novel ideas, solutions, or products in the form of text, images, audio, and source code.

        </div>

---

## Classification

Based on cognitive capability, AI is categorized into two main types:

1. **Narrow AI** (also known as **weak AI**)

    !!! note "Characteristics of Narrow AI"

        - Designed and trained to handle specific tasks or operate within specific domains.
        - Operates optimally only within predefined parameters or constraints.
        - Cannot transfer knowledge to other domains, i.e., it lacks cross-domain transfer learning without retraining.

    Examples:  
    Virtual assistants, facial recognition systems, machine translation, and chess engines.

    All current AI systems belong to the category of narrow AI.

2. **Artificial General Intelligence** (also known as **strong AI**)

    !!! note "Characteristics of Artificial General Intelligence"

        - Equivalent to human intelligence across all domains.
        - Capable of self-directed learning, abstract reasoning, solving novel problems, and transferring knowledge across different domains.
        - Possesses initiative and self-awareness.
    
    To date, no practical AGI system exists.

??? info "Superintelligence (ASI)"

    Some researchers also discuss a third category of AI: **Artificial Superintelligence**.

    The defining characteristic of superintelligence is that it far surpasses the intelligence and creative capacity of the most brilliant human minds across every domain.

    Currently, superintelligence remains purely hypothetical and is the subject of extensive debate regarding ethics and the future of humanity.

    The transition from narrow AI to general AI and eventually toward superintelligence remains a long-term journey for computer science.

??? info "Comparison of AI types"

    | Criterion | Narrow AI | Artificial general intelligence | Superintelligence |
    | --- | --- | --- | --- |
    | Current status | Widely applied in practice | Theoretical, a long-term goal | Hypothetical |
    | Scope of operation | Narrow, specific domains | Comprehensive, human-level | Far surpasses human cognitive limits |
    | Knowledge transfer | Impossible | Flexible, self-directed transfer | Independently invents novel knowledge |
    | Emotions and consciousness | None | Equivalent to humans | Far surpasses human levels of awareness |

??? info "Main research branches of AI"

    AI is a broad field comprising many research branches. These branches typically do not operate in isolation, but rather work together closely within complex AI systems.

    <div class="grid cards" markdown>

    -   :material-brain:{ .lg .middle } **Algorithms and models**

        - **Machine learning**: algorithms that automatically improve performance through experience or data.
        - **Deep learning**: an advanced machine learning technique based on multi-layer neural networks to automatically extract data features.
        - **Artificial neural networks**: computational models inspired by the biological neural network structure of the brain.
        - **Fuzzy logic**: a form of multi-valued logic that enables computers to process approximate, imprecise concepts rather than strict binary 0s and 1s.
        - **Evolutionary computation**: algorithms for solving optimization problems based on biological evolutionary mechanisms, such as natural selection, mutation, and crossover.

    -   :material-eye-outline:{ .lg .middle } **Perception and interaction**

        - **Computer vision**: the acquisition, processing, and understanding of image or video content by computers.
        - **Natural language processing**: the ability of computers to understand, analyze, and generate human language.
        - **Speech recognition**: the conversion of spoken language from audio signals into text for computer processing.

    -   :material-sitemap-outline:{ .lg .middle } **Knowledge and reasoning**

        - **Knowledge representation and reasoning**: encoding information about the real world into a format that computers can use to reason.
        - **Expert systems**: computer programs that emulate the decision-making ability of human experts within a narrow domain.
        - **Automated planning and decision-making**: automatically constructing an optimal sequence of actions to achieve specific goals.
        - **Robotics** : designing and constructing AI-integrated robots to interact with the physical world.

    </div>

---

## Summary mindmap

<div>
    <iframe style="width: 100%; height: 360px" frameBorder=0 src="/grade-12/topic-A/mindmaps/ai-a-simplified-overview.html">Sơ đồ tóm tắt</iframe>
</div>

---

## Some English words

| Vietnamese | Tiếng Anh | 
| --- | --- |
| AI hẹp | ANI - Artificial Narrow Intelligence |
| AI tổng quát | AGI - Artificial General Intelligence |
| Siêu AI | ASI - Artificial Superintelligence |