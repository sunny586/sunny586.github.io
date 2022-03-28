export interface IMdPath {
  id: string
  url: string
  title?: string
  desc?: string
  tag_name?: string
  type?: string
}

function normalize(list: string[], idPrefix: string, urlPrefix: string, type: string, tagType: string) {
  return list.map((item, index) => {
    const [title, tagName] = item.split('@')
    return {
      id: `${idPrefix}_${index + 1}`,
      url: `${urlPrefix}/${title}.md`,
      title,
      tag_name: `${tagType} · ${tagName || 'JavaScript'}`,
      type,
    }
  })
}
// https://sunny586.github.io/code/dist/mark-down/fe-interview/手写高质量代码


// fe-interview  start -------
// 框架
const feInterviewFrameArray = ['微服务通信']
const feInterviewFrame = normalize(feInterviewFrameArray, 'fe-interview_frame', '/mark-down/fe-interview/框架', 'fe-interview', '前端')
// 手写高质量代码
const feInterviewWriteCodeArray = ['类型判断', '手写new', 'curry-add', '遍历DOM树', '手写event-bus', 'array-flatten', 'dom转vdom', '手写instanceof', '手写LRU', '深拷贝', '手写lazyman', '手写bind函数']
const feInterviewWriteCode = normalize(feInterviewWriteCodeArray, 'fe-interview_write_code', '/mark-down/fe-interview/手写高质量代码', 'fe-interview', '前端')
// fe-interview  end -------


export const MESSAGE = '最近在学习js基础'

export const MD_PATH: IMdPath[] = [...feInterviewFrame, ...feInterviewWriteCode]

