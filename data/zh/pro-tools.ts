import type { ProToolL10n } from '@/data/pro-tools';

export const proToolsL10n: ProToolL10n[] = [
  {
    slug: 'arrival-checklist',
    title: '第一周清单',
    summary: '将入门指南转化为你可以在韩国第一周实际追踪的逐步计划。',
    guideTitle: '入门指南',
    ctaLabel: '打开Pro清单',
    bridgeTitle: '准备好停止阅读，开始规划第一周了吗？',
    bridgeDescription:
      '公开指南解释了概况。Pro将其切换为专属第一周工作区，具备持续进度记录、实用任务和个人笔记空间。',
    highlight: '适合希望在一个地方管理韩国第一个7天的学生。',
    executionSummary:
      '将此工作区用作你的日常操作板。标记已完成的内容，给自己留一个简短提醒，稍后返回时不会丢失进度。',
    readinessLabel: '到达周计划',
    readinessDescription:
      '此工作区在你刚刚落地或即将到达、需要秩序而非更多背景阅读时最为有效。',
    notePlaceholder:
      '例如：宿舍地址已确认，机场接机联系人已保存，银行访问可在周五后进行，向学校办公室询问入学文件。',
    nextToolTitle: 'ARC准备清单',
    features: [
      {
        title: '优先顺序',
        description: '了解首先该做什么、可以等待几天的事情，以及如果忽视会阻碍后续任务的内容。',
      },
      {
        title: '持续进度',
        description: '将你的勾选状态和笔记保存在此浏览器中，以便稍后继续而无需重新制定计划。',
      },
      {
        title: '指南链接',
        description: '每当你需要解释、细节或来源背景时，跳回原始K-Survival Kit指南。',
      },
    ],
    steps: [
      {
        title: '稳定基础',
        body: '确认住所、网络连接和学校联系方式，使本周剩余时间更易管理。',
      },
      {
        title: '准备身份文件',
        body: '整理你在银行、移民局和校园行政中反复需要的文件。',
      },
      {
        title: '完成日常生活设置',
        body: '融入让韩国生活更顺畅的实际日常，如支付、外卖和交通。',
      },
    ],
    tasks: [
      {
        id: 'arrival-home-base',
        title: '确认今晚你将睡在哪里',
        description: '确保你知道第一个住所的确切地址、进入方式和联系人。',
        stepHint: '稳定基础',
      },
      {
        id: 'arrival-connectivity',
        title: '获取即时移动或网络连接',
        description: '为第一天选择最简单的可用选项，以便立即使用地图、消息和外卖应用。',
        stepHint: '稳定基础',
      },
      {
        id: 'arrival-campus-contact',
        title: '保存学校和紧急联系方式',
        description: '将国际办公室、导生、宿舍办公室或院系联系方式放在容易找到的地方。',
        stepHint: '稳定基础',
      },
      {
        id: 'arrival-documents',
        title: '收集最常用的身份文件',
        description: '将护照、录取通知书、地址详情和学生文件集中存放以备多次使用。',
        stepHint: '准备身份文件',
      },
      {
        id: 'arrival-banking-plan',
        title: '制定银行和支付的简短计划',
        description: '决定在接下来几天是否需要取现、卡片访问或提前去银行。',
        stepHint: '完成日常生活设置',
      },
      {
        id: 'arrival-later-tasks',
        title: '列出依赖ARC或本地号码的任务',
        description: '区分现在可以做的事和韩国身份验证后会更容易做的事。',
        stepHint: '完成日常生活设置',
      },
    ],
  },
  {
    slug: 'arc-prep-checklist',
    title: 'ARC准备清单',
    summary: '用于准备ARC申请文件、预约计划和后续任务的结构化预访清单。',
    guideTitle: 'ARC卡指南',
    ctaLabel: '打开ARC准备',
    bridgeTitle: '准备好让移民局访问更少意外了吗？',
    bridgeDescription:
      '指南解释了ARC流程。Pro将其转化为准备桌面，供你追踪文件准备情况、预约计划以及依赖ARC签发的任务。',
    highlight: '适合预约第一次移民局访问或整理到达后文件的学生。',
    executionSummary:
      '使用此页面减少移民日前的最后时刻混乱。目标不是记住政策，而是以更清晰的准备状态到达。',
    readinessLabel: '移民局准备',
    readinessDescription:
      '此工作区最适合你已知道ARC重要性但希望以更从容的方式准备预约和文件时使用。',
    notePlaceholder:
      '例如：预约日期待定，大学证明已申请，车站附近有照相亭，出发前确认各分支机构的具体要求。',
    nextToolTitle: '银行开户入门',
    features: [
      {
        title: '文件准备情况',
        description: '查看学生在移民局预约前通常需要准备的常见物品。',
      },
      {
        title: '时间提醒',
        description: '将申请时间窗口和相关任务集中在一处，而非分散在消息和标签页中。',
      },
      {
        title: '签发后流程',
        description: '了解ARC准备好后哪些日常任务会变得更容易，提前规划下一步。',
      },
    ],
    steps: [
      {
        title: '确认预约计划',
        body: '确认访问时间、学校指导，以及是否需要额外的支持文件。',
      },
      {
        title: '一次性准备所有文件',
        body: '提前收集常用文件，避免在移民局访问前临时抱佛脚。',
      },
      {
        title: '将ARC与下一步设置任务关联',
        body: '利用ARC里程碑解锁后续步骤，如银行业务、移动套餐和其他身份核查。',
      },
    ],
    tasks: [
      {
        id: 'arc-appointment-check',
        title: '确认可以申请的时间和地点',
        description: '查看时间窗口、办公室位置，以及学校是否对学生有额外说明。',
        stepHint: '确认预约计划',
      },
      {
        id: 'arc-document-pack',
        title: '在一个文件夹中准备文件包',
        description: '收集预约时预计需要出示的常用身份和学校相关材料。',
        stepHint: '一次性准备所有文件',
      },
      {
        id: 'arc-photo-check',
        title: '提前处理照片和支付细节',
        description: '不要将照片或支付方式等小要求留到最后一天早上。',
        stepHint: '一次性准备所有文件',
      },
      {
        id: 'arc-proof-address',
        title: '验证你的地址或居住证明计划',
        description: '提前了解如何解释或证明你的居住安排，后续问题会更容易处理。',
        stepHint: '一次性准备所有文件',
      },
      {
        id: 'arc-next-unlocks',
        title: '列出ARC签发后会更容易的服务',
        description: '简短记录ARC就绪后你想再次访问的银行、电话或应用任务。',
        stepHint: '将ARC与下一步设置任务关联',
      },
      {
        id: 'arc-university-support',
        title: '询问大学是否提供流程协助',
        description: '部分学校提供文件、指导或预约建议，可以节省时间。',
        stepHint: '确认预约计划',
      },
    ],
  },
  {
    slug: 'sim-plan-starter',
    title: 'SIM卡方案入门',
    summary: '面向需要在机场SIM卡、eSIM或后续月租套餐之间做选择的新到达留学生的决策页面。',
    guideTitle: 'SIM卡指南',
    ctaLabel: '比较第一周选项',
    bridgeTitle: '准备好在不阅读每种套餐类型的情况下做出第一天的电话决策了吗？',
    bridgeDescription:
      '公开指南解释了完整的SIM卡概况。Pro将其缩小为到达日、短期使用和后续升级路径的简单决策板。',
    highlight: '适合希望在不阅读每种套餐类型的情况下做出简单第一天移动选择的学生。',
    executionSummary:
      '将此视为决策板而非电信文章。其目的是帮助你现在选择可行的方案，并计划稍后改进的内容。',
    readinessLabel: '网络连接设置',
    readinessDescription:
      '此工作区在落地前或到达后的前两天最为有用，此时快速连接比完美优化更重要。',
    notePlaceholder:
      '例如：落地后立即需要数据，eSIM适配我的手机，月租合约可以等ARC到手后再考虑，保留韩国号码用于后续银行验证。',
    nextToolTitle: '银行开户入门',
    features: [
      {
        title: '短期与长期框架',
        description: '将临时到达选项与可能稍后切换的套餐分开。',
      },
      {
        title: '第一天决策帮助',
        description: '通过首先关注最快可行选项来减少阻力。',
      },
      {
        title: '后续步骤链接',
        description: '从移动决策延伸到可能依赖你号码的银行和ARC任务。',
      },
    ],
    steps: [
      {
        title: '为到达日做决定',
        body: '选择落地时立即保持连接的最简单选项。',
      },
      {
        title: '检查你拥有的文件',
        body: '你的电话设置可能会根据仅有护照访问或后续基于ARC的验证而有所不同。',
      },
      {
        title: '计划后续升级',
        body: '安顿下来后，比较是否有必要保留预付费服务或转到月租套餐。',
      },
    ],
    tasks: [
      {
        id: 'sim-immediate-choice',
        title: '选择你的即时到达选项',
        description: '决定你是否需要机场取卡、eSIM激活或前几天的简单预付费选项。',
        stepHint: '为到达日做决定',
      },
      {
        id: 'sim-device-check',
        title: '确认你的手机可以使用你选择的选项',
        description: '出行前检查设备兼容性、解锁状态以及安装步骤是否可行。',
        stepHint: '为到达日做决定',
      },
      {
        id: 'sim-identity-limits',
        title: '记录没有ARC可能面临的身份限制',
        description: '部分验证要求较高的服务在获得更多韩国身份凭证后可能更容易使用。',
        stepHint: '检查你拥有的文件',
      },
      {
        id: 'sim-later-plan',
        title: '记下何时想重新考虑月租套餐',
        description: '只要你知道何时重新评估，临时到达方案通常是可以的。',
        stepHint: '计划后续升级',
      },
      {
        id: 'sim-number-dependency',
        title: '记录依赖韩国号码的任务',
        description: '考虑可能依赖本地号码的银行应用、账户验证、学校消息和外卖平台。',
        stepHint: '计划后续升级',
      },
      {
        id: 'sim-budget-note',
        title: '只有在覆盖范围和时间合理后再比较费用',
        description: '价格很重要，但最快可用的设置通常是第一周更好的选择。',
        stepHint: '为到达日做决定',
      },
    ],
  },
  {
    slug: 'bank-setup-starter',
    title: '银行开户入门',
    summary: '将银行指南转化为实用文件和准备清单的银行网点访问准备页面。',
    guideTitle: '银行账户指南',
    ctaLabel: '准备银行访问',
    bridgeTitle: '准备好让你的第一次银行访问更可预测了吗？',
    bridgeDescription:
      '指南帮助学生了解韩国银行业务。Pro专注于网点准备，让你能够整理文件、选择可行的网点环境，并记住之后需要核查的内容。',
    highlight: '适合计划在未来几天内访问银行网点的学生。',
    executionSummary:
      '此工作区帮助你避免含糊不清的银行访问。目标是到达时知道你能出示什么、可能阻碍你的是什么，以及在离开网点前要测试什么。',
    readinessLabel: '网点访问准备',
    readinessDescription:
      '此页面最适合你即将访问网点且需要比长篇对比文章更平静的清单时使用。',
    notePlaceholder:
      '例如：校园附近的网点可能对外国人更友好，携带护照和学生证明，询问是否可以在同一天注册应用。',
    nextToolTitle: '住房安全须知',
    features: [
      {
        title: '准备情况摘要',
        description: '查看学生访问网点前通常希望准备好的常见物品。',
      },
      {
        title: '依赖关系意识',
        description: '让ARC、电话号码和地址相关的依赖关系保持可见，而不是在柜台时才发现它们。',
      },
      {
        title: '决策支持',
        description: '专注于实际的网点适合度，而非抽象的银行声誉。',
      },
    ],
    steps: [
      {
        title: '收集可能需要的文件',
        body: '准备网点通常询问的常见身份、学生和联系方式详情。',
      },
      {
        title: '选择合适的网点环境',
        body: '从校园附近或更常接待留学生的区域的网点开始。',
      },
      {
        title: '确认下一步基于应用的任务',
        body: '开户后立即考虑转账、电话验证和日常银行业务。',
      },
    ],
    tasks: [
      {
        id: 'bank-document-pack',
        title: '整理你可能需要的银行访问文件',
        description: '出发前将你的身份、学校、联系方式和地址详情集中存放。',
        stepHint: '收集可能需要的文件',
      },
      {
        id: 'bank-branch-choice',
        title: '选择一个现实的第一个网点尝试',
        description: '优先选择校园附近或工作人员可能更熟悉学生案例的区域的网点。',
        stepHint: '选择合适的网点环境',
      },
      {
        id: 'bank-identity-dependencies',
        title: '检查哪些依赖ARC或电话验证',
        description: '了解哪些账户或应用功能在韩国身份设置更完善后可能更容易使用。',
        stepHint: '收集可能需要的文件',
      },
      {
        id: 'bank-post-visit',
        title: '计划在离开网点前测试什么',
        description: '考虑卡片激活、应用登录、转账设置以及你不想稍后才发现的任何内容。',
        stepHint: '确认下一步基于应用的任务',
      },
      {
        id: 'bank-transfer-needs',
        title: '记下你即时的资金流动需求',
        description: '了解你是否需要学费支付、房租转账或日常消费访问，帮助你提出更好的问题。',
        stepHint: '确认下一步基于应用的任务',
      },
      {
        id: 'bank-backup-plan',
        title: '如果第一个网点拒绝，准备备用方案',
        description: '第二个网点、稍晚的时间或额外的文件通常比当场争论更快解决问题。',
        stepHint: '选择合适的网点环境',
      },
    ],
  },
  {
    slug: 'housing-safety-notes',
    title: '住房安全须知',
    summary: '将住房押金指南转化为具体问题和合同检查点的预合同审查页面。',
    guideTitle: '房租押金指南',
    ctaLabel: '查看住房安全要点',
    bridgeTitle: '准备好以更清晰的安全检查点审查房间了吗？',
    bridgeDescription:
      '公开指南解释了押金和租赁结构。Pro将这些信息转化为实用的审查工作区，包含问题、红旗信号和支付前应保留的证据。',
    highlight: '适合在签约前比较房间、合同和押金条件的学生。',
    executionSummary:
      '在钱款交接前使用此页面。目标是让决策慢下来足以保护自己，同时将所有关键问题集中在一处。',
    readinessLabel: '预合同审查',
    readinessDescription:
      '此工作区在你与中介或房东交谈时最为重要，需要在付款前确认更安全的结构。',
    notePlaceholder:
      '例如：询问谁收取押金，确认确切的入住日期，拍摄房间状况，在转账前保存房源截图和合同草稿。',
    nextToolTitle: '第一周清单',
    features: [
      {
        title: '问题提示',
        description: '在比较选项时将重要的合同和退款问题集中在一处。',
      },
      {
        title: '风险提醒',
        description: '提醒在住房截止日期压力下学生经常忘记的细节。',
      },
      {
        title: '证据意识',
        description: '意识到照片、收据和书面记录与口头保证同样重要。',
      },
    ],
    steps: [
      {
        title: '检查谁在收款',
        body: '在转账任何款项之前，确认房东或中介详情以及押金的记录方式。',
      },
      {
        title: '查看退款逻辑',
        body: '确保合同明确说明押金条件、搬出时间和扣款情况。',
      },
      {
        title: '从第一天起保留证据',
        body: '保存收据，拍照，并为房产和协议保留书面记录。',
      },
    ],
    tasks: [
      {
        id: 'housing-recipient-check',
        title: '确认应该向谁支付款项',
        description: '在支付押金或费用之前，确保付款方身份和房间关系清晰。',
        stepHint: '检查谁在收款',
      },
      {
        id: 'housing-contract-logic',
        title: '仔细阅读押金和退款逻辑',
        description: '查找入住时间、退款条件、可能的扣款以及任何不明确的违约语言。',
        stepHint: '查看退款逻辑',
      },
      {
        id: 'housing-room-condition',
        title: '入住前记录房间状况',
        description: '拍照并保留书面记录，以免日后只能依赖记忆。',
        stepHint: '从第一天起保留证据',
      },
      {
        id: 'housing-paper-trail',
        title: '保留每笔支付和承诺的书面记录',
        description: '将截图、收据、合同和房源详情保存在一处。',
        stepHint: '从第一天起保留证据',
      },
      {
        id: 'housing-question-list',
        title: '准备你仍需解答的问题',
        description: '在通话或访问前写下这些问题，以免在压力下忘记。',
        stepHint: '查看退款逻辑',
      },
      {
        id: 'housing-second-opinion',
        title: '如果交易感觉仓促，请寻求第二意见',
        description: '短暂暂停或再次审查通常比因为紧迫感而迅速付款更安全。',
        stepHint: '检查谁在收款',
      },
    ],
  },
];
