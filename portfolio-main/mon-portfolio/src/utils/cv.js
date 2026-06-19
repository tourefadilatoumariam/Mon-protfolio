export const downloadCV = async () => {
  try {
    const response = await fetch('/cv.html')
    const htmlText = await response.text()
    
    // Parser le HTML du CV
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlText, 'text/html')
    const element = doc.querySelector('.cv-container')
    
    if (!element) {
      throw new Error('Conteneur du CV introuvable dans le HTML.')
    }
    
    // Conteneur temporaire pour évaluer les styles et polices
    const tempContainer = document.createElement('div')
    tempContainer.style.position = 'fixed'
    tempContainer.style.left = '-9999px'
    tempContainer.style.top = '-9999px'
    tempContainer.appendChild(element)
    
    // Copier les styles de cv.html
    const styleTags = doc.querySelectorAll('style, link[rel="stylesheet"]')
    styleTags.forEach(tag => {
      tempContainer.appendChild(tag.cloneNode(true))
    })
    
    document.body.appendChild(tempContainer)

    const opt = {
      margin:       0,
      filename:     'CV_Toure_Fadilatou_Mariam.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }
    
    // Génération et téléchargement du PDF
    await window.html2pdf().from(element).set(opt).save()
    
    // Nettoyage
    document.body.removeChild(tempContainer)
  } catch (error) {
    console.error('Erreur lors du téléchargement du CV:', error)
    // Repli : ouvrir le fichier HTML du CV dans un nouvel onglet pour impression
    window.open('/cv.html', '_blank')
  }
}
