# Article Semantic Tree

ARTICLE: 活动帧：面向智能体记忆与回放的确定性屏幕活动编译
THESIS: 确定性活动编译可压缩用户行为记忆并支持低成本例程回放，但证据仍限单用户语料
AUTHOR_STANCE: support

## TOPIC: 确定性用户活动记忆与例程回放

- topic_role: primary

### ISSUE 1: 如何把屏幕活动编译为可审计且高效的智能体行为记忆？

- issue_type: capability
- scope: 被动采集的计算机屏幕活动及其智能体记忆应用

#### CLAIM 1.1: 无模型编译可将原始屏幕流转换为确定且可审计的活动帧

- type: direct_author_claim
- stance: support
- focus: mechanism
- relation_to_issue: answers
- target: 屏幕活动记忆编译
- aspect: 确定性与可审计性
- scope: 本地被动捕获的屏幕活动流
- evidence_refs: [p002]

##### EVIDENCE

- [p002] 流水线无需模型参与，将本地捕获流切分为带应用、站点、时间和证据指针的活动帧
- [p002] 输出可做到字节级一致、可缓存，并能通过指向原始记录的证据指针机械审计

##### CONCEPTS

- 确定性活动编译
    - relation_to_claim: explains
    - evidence: [p002]
- 证据可追溯记忆
    - relation_to_claim: supports
    - evidence: [p002]

##### MECHANISM

- title: 原始行为到确定性记忆的编译链
    - relation_to_claim: explains
    - chain: 本地屏幕捕获流 → 类型化活动帧分段 → 附加上下文与原始证据指针 → 可缓存可审计记忆
    - evidence: [p002]

##### UNCERTAINTY

- 论文摘要未说明跨用户、跨设备及复杂应用环境下活动分段的稳健性
    - relation_to_claim: qualifies
    - evidence: [p002]

#### CLAIM 1.2: 编译记忆在单用户实验中兼具高压缩率与较高问答准确率

- type: external_fact_claim
- stance: support
- focus: evidence
- relation_to_issue: supports
- target: 活动帧编译器
- aspect: 压缩效率与下游问答效果
- scope: 一名专业用户、51个活跃日、128756帧的语料
- evidence_refs: [p002]

##### EVIDENCE

- [p002] 单用户128756帧、51个活跃日语料中，一天原始捕获被压缩为小86倍的上下文块，耗时68毫秒
- [p002] 智能体读取该块后日内问答准确率98.4%，而同源LLM摘要为66%至80%

##### CONCEPTS

- 行为记忆压缩
    - relation_to_claim: explains
    - evidence: [p002]
- 模型能力替代
    - relation_to_claim: supports
    - evidence: [p002]

##### MECHANISM

- title: 结构化压缩降低记忆读取负担
    - relation_to_claim: explains
    - chain: 原始高容量活动记录 → 确定性结构化压缩 → 提示就绪上下文 → 智能体读取并回答日内活动问题
    - evidence: [p002]

##### UNCERTAINTY

- 98.4%结果来自单个专业用户语料，尚不能证明跨用户泛化能力
    - relation_to_claim: qualifies
    - evidence: [p002]

### ISSUE 2: 人类既有例程的确定性回放能在多大程度上降低智能体推理需求？

- issue_type: cost
- scope: 可重复、可委托的人机操作例程与智能体推理成本

#### CLAIM 2.1: 被动人类活动可为智能体成本模型提供例程开销与复发率参数

- type: direct_author_claim
- stance: support
- focus: cost
- relation_to_issue: answers
- target: 智能体成本模型
- aspect: 需求侧例程测量
- scope: 委托前被动人类活动而非智能体rollout
- evidence_refs: [p002]

##### EVIDENCE

- [p002] 编译器从委托前被动人类活动读取Routine Overhead Ratio与例程复发率两个成本参数
- [p002] 报告R的建模上界为60至343倍，可委托例程复发率样本内9.0%、样本外7.7%

##### CONCEPTS

- 例程推理开销
    - relation_to_claim: explains
    - evidence: [p002]
- 可委托例程复发率
    - relation_to_claim: supports
    - evidence: [p002]

##### MECHANISM

- title: 被动行为测量转化为成本参数
    - relation_to_claim: explains
    - chain: 观察委托前人类活动 → 识别重复可委托例程 → 测量复发率与例程开销 → 估算智能体推理成本边界
    - evidence: [p002]

##### UNCERTAINTY

- R被明确描述为建模上界，不能直接视为真实部署中的已实现成本节省
    - relation_to_claim: qualifies
    - evidence: [p002]

#### CLAIM 2.2: 命中已编译例程时可绕过模型并以零模型Token确定性回放

- type: direct_author_claim
- stance: support
- focus: mechanism
- relation_to_issue: supports
- target: 已编译例程回放
- aspect: 模型旁路与Token消耗
- scope: 满足guard匹配条件的例程命中
- evidence_refs: [p002]

##### EVIDENCE

- [p002] 作者称已编译例程可在模型不参与情况下确定性回放，并现场展示guard匹配命中的零模型Token执行
- [p002] 基于7.7%至9.0%的可委托复发率，论文给出全体任务Token节省上限接近8%的估计

##### CONCEPTS

- 模型旁路执行
    - relation_to_claim: explains
    - evidence: [p002]
- 确定性例程回放
    - relation_to_claim: supports
    - evidence: [p002]

##### MECHANISM

- title: 例程命中后的推理旁路
    - relation_to_claim: explains
    - chain: 已编译例程存在 → guard条件匹配 → 绕过模型推理 → 确定性零模型Token回放
    - evidence: [p002]

##### UNCERTAINTY

- 接近8%的Token上限依赖单用户观察到的例程复发率及成本模型假设
    - relation_to_claim: qualifies
    - evidence: [p002]

## NOISE

- arXiv版本与Announce Type等发布元数据不构成论文核心论证
    - spans: [p002]