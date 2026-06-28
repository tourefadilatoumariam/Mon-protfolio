const cvFile = '/CV_Toure_Fadilatou_Mariam.pdf'

export const downloadCV = () => {
  // Ouvrir le CV dans un nouvel onglet pour vérifier qu'il est bien accessible
  window.open(cvFile, '_blank')
}
