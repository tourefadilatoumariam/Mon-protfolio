const cvFile = '/CV_Toure_Fadilatou_Mariam.pdf'

export const downloadCV = () => {
  const link = document.createElement('a')
  link.href = cvFile
  link.download = 'CV_Toure_Fadilatou_Mariam.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
