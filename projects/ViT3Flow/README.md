# ViT3Flow

**A Test-Time Training Transformer MeanFlow for Postoperative Radiograph Synthesis in Scoliosis**

[Back to project hub](../../README.md)

## Task

Given a preoperative whole-spine radiograph, synthesize a postoperative radiograph that models surgical correction while retaining patient-specific anatomical characteristics. This is an image synthesis research task; the generated image does not establish an achievable or guaranteed surgical result.

## Method

1. Encode preoperative anatomy as a separate conditioning token stream.
2. Extract dominant-curve region and direction distributions with a Spinal Morphology Extraction Agent.
3. Use test-time-training token mixers for sample-specific adaptation.
4. Apply Diagnosis-Routed Interval Cross-Attention (DRICA) for interval-dependent vertical, horizontal, joint, and global retrieval of preoperative evidence.
5. Generate the postoperative radiograph through conditional MeanFlow transport with a single network function evaluation.

## Dataset

**ScoliSurg** contains 632 paired preoperative–postoperative whole-spine radiographs with structured morphology information, as described in the manuscript. Dataset access conditions will be documented separately; no patient images or annotations are included in this repository.

## Availability

The public manuscript link, final implementation, checkpoints, environment specification, evaluation protocol, and graphical abstract will be added as they become available.

The existing [ScoliCMF repository](https://github.com/Tomry1114/ScoliCMF) is linked for context. Its current name and inference documentation differ from the ViT3Flow manuscript; it is not presented here as the verified final ViT3Flow implementation.
