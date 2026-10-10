# Article Semantic Tree

ARTICLE: 新研究建模「幻觉滚雪球」在多智能体 LLM 流水线中的传播
THESIS: 多智能体流水线中错误会随阶段累积，而边界验证比末端检查更能抑制幻觉传播。
AUTHOR_STANCE: support

## TOPIC: 多智能体流水线中的幻觉传播与验证

- topic_role: primary

### ISSUE 1: 多阶段智能体流水线为何会放大早期幻觉？

- issue_type: risk
- scope: 多智能体LLM流水线中的跨阶段信息传递

#### CLAIM 1.1: 随流水线阶段推进，早期注入错误越来越难被后续模型识别

- type: external_fact_claim
- stance: support
- focus: risk
- relation_to_issue: supports
- target: 多智能体LLM流水线
- aspect: 错误检测能力随阶段变化
- scope: 文中所述GPT-4o实验

##### EVIDENCE

- [p002] GPT-4o对注入错误的检测率从Stage 1的72.0%降至Stage 4的50.9%。

##### CONCEPTS

- 幻觉滚雪球效应
    - relation_to_claim: explains
    - evidence: [p002]
- 跨阶段错误传播
    - relation_to_claim: explains
    - evidence: [p002]

##### MECHANISM

- title: 错误跨阶段累积使后续识别能力下降
    - relation_to_claim: explains
    - chain: 早期错误进入流水线 → 经后续阶段继续传递 → 后期错误检测率下降
    - evidence: [p002]

##### UNCERTAINTY

- 仅基于 excerpt，未覆盖全文，无法判断实验任务、样本量及统计显著性。
    - relation_to_claim: qualifies
    - evidence: [p002]

### ISSUE 2: 在多智能体流水线中，验证应部署在什么位置才能有效阻断幻觉？

- issue_type: governance
- scope: 多阶段LLM系统的验证与错误阻断设计

#### CLAIM 2.1: 阶段边界验证显著降低幻觉存活率，而仅在末端检查效果很弱

- type: external_fact_claim
- stance: support
- focus: governance
- relation_to_issue: answers
- target: 多智能体LLM流水线验证机制
- aspect: 验证位置与错误存活率
- scope: 文中所述边界验证与末端检查实验

##### EVIDENCE

- [p002] 边界门验证将幻觉存活率从58.4%降至16.2%，而流水线末端检查几乎无效。

##### CONCEPTS

- 阶段边界验证
    - relation_to_claim: supports
    - evidence: [p002]
- 末端验证
    - relation_to_claim: qualifies
    - evidence: [p002]

##### MECHANISM

- title: 早期阻断减少错误进入后续阶段的机会
    - relation_to_claim: explains
    - chain: 阶段边界执行验证 → 错误在继续传播前被拦截 → 最终幻觉存活率下降
    - evidence: [p002]

##### UNCERTAINTY

- excerpt仅称末端检查“几乎无效”，未给出其具体数值或实施细节。
    - relation_to_claim: qualifies
    - evidence: [p002]

## NOISE

- 标题重复文章主题，本身未提供额外研究证据。
    - spans: [p001]