const landingContent = {
  name: 'landingContent',
  title: 'Contenido de la Landing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Identificador Interno',
      type: 'string',
      initialValue: 'Textos de la Landing Page',
      readOnly: true
    },
    // SECCIÓN HERO (EN/ES)
    { name: 'hero_badge_en', title: 'Hero Badge (EN)', type: 'string' },
    { name: 'hero_badge_es', title: 'Hero Badge (ES)', type: 'string' },
    { name: 'hero_title_1_en', title: 'Hero Título Línea 1 (EN)', type: 'string' },
    { name: 'hero_title_1_es', title: 'Hero Título Línea 1 (ES)', type: 'string' },
    { name: 'hero_title_2_en', title: 'Hero Título Línea 2 - Énfasis Verde (EN)', type: 'string' },
    { name: 'hero_title_2_es', title: 'Hero Título Línea 2 - Énfasis Verde (ES)', type: 'string' },
    { name: 'hero_desc_en', title: 'Hero Descripción (EN)', type: 'text' },
    { name: 'hero_desc_es', title: 'Hero Descripción (ES)', type: 'text' },
    { name: 'hero_btn_audit_en', title: 'Botón Auditoría (EN)', type: 'string' },
    { name: 'hero_btn_audit_es', title: 'Botón Auditoría (ES)', type: 'string' },
    { name: 'hero_btn_proof_en', title: 'Botón Pruebas (EN)', type: 'string' },
    { name: 'hero_btn_proof_es', title: 'Botón Pruebas (ES)', type: 'string' }
  ]
}

export const schemaTypes = [landingContent]
