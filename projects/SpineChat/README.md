# SpineChat

**Reliability-Aware Clinical Evidence Grounding and Reasoning for Multi-Turn Multimodal Spinal Deformity Diagnosis**

[Back to project hub](../../README.md) · [Reference implementation](https://github.com/Tomry1114/SpineChat)

## Clinical Workflow

1. **Surface screening:** interpret paired body-surface RGB and depth observations.
2. **Structural assessment:** introduce standing whole-spine radiographs for curve grounding and diagnostic reasoning.
3. **Evidence update:** regulate earlier findings according to their reliability and the newly available structural evidence.

## Components

| Component | Role |
| :--- | :--- |
| Latent Spatial Evidence Module (LSEM) | Recover concept-specific spatial evidence from latent body-surface representations |
| CurveToken Grounding | Maintain instance-specific representations of coexisting spinal curves |
| Reliability-Aware Evidence Propagation (RAEP) | Regulate cross-turn contributions of earlier clinical evidence |

**SpineVQA** provides paired RGBD observations, standing whole-spine radiographs, and structured annotations for surface assessment, curve grounding, and diagnostic reasoning.

## Availability

Reference code is hosted in the [SpineChat repository](https://github.com/Tomry1114/SpineChat). Follow that repository for its installation instructions and implementation details. A public manuscript link and graphical abstract will be added when available. No patient data is distributed by this project hub.
