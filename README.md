<div align="center">

# Surgical Planning
### AI for Spinal Deformity Assessment and Postoperative Radiograph Synthesis

**From multimodal clinical evidence to patient-specific postoperative image synthesis.**

[ViT3Flow](#vit3flow--postoperative-radiograph-synthesis) · [SpineChat](#spinechat--multimodal-spinal-deformity-assessment) · [Resources](#resources) · [Release Roadmap](#release-roadmap) · [Contact](#contact)

</div>

---

## Overview

This project brings together our research on AI-assisted scoliosis assessment and surgical planning. It covers two complementary research directions: interpreting multimodal evidence of spinal deformity and synthesizing postoperative radiographic appearance from preoperative images.

**ViT3Flow** focuses on postoperative radiograph synthesis for scoliosis surgical planning. **SpineChat** studies progressive multimodal spinal deformity assessment. They are separate research frameworks; this repository serves as a shared project hub rather than an integrated clinical pipeline.

## Research at a Glance

| Work | Clinical question | Inputs | Research output | Dataset |
| :--- | :--- | :--- | :--- | :--- |
| **ViT3Flow** | What postoperative radiographic appearance can be synthesized from preoperative anatomy? | Preoperative whole-spine radiograph | Synthesized postoperative radiograph | **ScoliSurg**: 632 preoperative–postoperative pairs |
| **SpineChat** | How can surface screening evidence and radiographs support progressive assessment? | Body-surface RGBD observations and standing whole-spine radiographs | Spatial evidence, curve grounding, and structured diagnostic responses | **SpineVQA**: paired multimodal clinical benchmark |

## ViT3Flow — Postoperative Radiograph Synthesis

### ViT3Flow: A Test-Time Training Transformer MeanFlow for Postoperative Radiograph Synthesis in Scoliosis

**Rui Tang\*, Sicheng Yang\*, Moxin Zhao\*, Hongqiu Wang, Guankun Wang, Lei Zhu, Hongliang Ren, Menglin Cong, and Nan Meng**  
\* Equal contribution.

Anticipating postoperative spinal morphology could help clinicians visualize potential correction patterns. ViT3Flow formulates postoperative radiograph synthesis as patient-conditioned finite-interval generative transport, using a conditional MeanFlow framework with a single network function evaluation (NFE).

- **Case-specific adaptation:** test-time-training token mixers adapt to the anatomy and deformity pattern of each case.
- **Morphology-guided retrieval:** a Spinal Morphology Extraction Agent estimates dominant-curve region and direction distributions from the preoperative radiograph.
- **Diagnosis-Routed Interval Cross-Attention (DRICA):** retrieves spatially corresponding preoperative anatomical evidence during transport.
- **ScoliSurg:** a paired dataset comprising 632 preoperative–postoperative whole-spine radiograph pairs with structured morphology information.

[Method overview and release status](projects/ViT3Flow/README.md)

## SpineChat — Multimodal Spinal Deformity Assessment

### SpineChat: Reliability-Aware Clinical Evidence Grounding and Reasoning for Multi-Turn Multimodal Spinal Deformity Diagnosis

**Nan Meng and Rui Tang**

SpineChat models a progressive assessment workflow: body-surface RGBD observations provide initial screening evidence, followed by radiographs for structural assessment and diagnostic reasoning.

- **Latent Spatial Evidence Module (LSEM):** recovers concept-specific spatial evidence from body-surface representations.
- **CurveToken Grounding:** establishes instance-specific representations for coexisting spinal curves.
- **Reliability-Aware Evidence Propagation (RAEP):** regulates the contribution of earlier findings as radiographic evidence becomes available.
- **SpineVQA:** pairs RGBD observations, standing whole-spine radiographs, and structured clinical annotations.

[Method overview](projects/SpineChat/README.md) · [Reference code](https://github.com/Tomry1114/SpineChat)

## Resources

| Resource | Status | Access |
| :--- | :--- | :--- |
| ViT3Flow project description | Available | [Overview](projects/ViT3Flow/README.md) |
| ViT3Flow manuscript link | To be added | — |
| ViT3Flow implementation and trained weights | Release preparation | — |
| Earlier ScoliCMF repository | Existing repository; correspondence to the final ViT3Flow method is not yet verified | [GitHub](https://github.com/Tomry1114/ScoliCMF) |
| SpineChat reference implementation | Available in a separate repository | [GitHub](https://github.com/Tomry1114/SpineChat) |
| SpineChat manuscript link | To be added | — |
| ScoliSurg / SpineVQA access information | To be announced | No patient data is distributed here |

The manuscript titles and method summaries describe the supplied research manuscripts. Code availability does not imply that an implementation has been independently reproduced or clinically validated. Public paper links and citation records will be added when available.

## Release Roadmap

- [x] Publish the project hub and research summaries.
- [x] Link existing research repositories.
- [ ] Add public manuscript links and verified citation metadata.
- [ ] Add graphical abstracts and selected qualitative examples cleared for public release.
- [ ] Prepare the ViT3Flow implementation, environment specification, and inference instructions.
- [ ] Release checkpoints and evaluation protocols when ready.
- [ ] Document dataset access conditions and licensing for each released resource.

Resources will be added progressively. This checklist tracks availability and does not commit to release dates or unrestricted dataset distribution.

## Research Use

These methods are research systems. Synthesized radiographs represent model outputs and should not be interpreted as guaranteed surgical outcomes or used as a substitute for clinical judgment. This repository does not provide a clinically deployed surgical planning tool.

## Contact

**Rui Tang** · [GitHub](https://github.com/Tomry1114)  
Department of Orthopaedics and Traumatology, The University of Hong Kong

Questions and collaboration inquiries are welcome through this repository's Issues.
