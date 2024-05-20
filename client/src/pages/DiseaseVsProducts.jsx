import React from 'react'

function DiseaseVsProducts() {
  return (
    <div className='vh-100 bg-body-tertiary'>
    <nav className='ms-5 me-5'
      style={{
        '--bs-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item fw-light fs-5">
          <a href="#" className='text-decoration-none text-muted'>Home</a>
        </li>
        <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">
          Disease vs Products
        </li>
      </ol>
    </nav>
    <div className="card me-5 ms-5">
      <div className="card-body">
        <h4>DISEASE VS PRODUCTS</h4><br /><br />
     <p className='fs-5'>
     <b>Foss Tonic :</b><span> Very effective in Reducing Excessive Fat, obesity, Body detoxiﬁcation.</span><br />
        <b> Natural Health Tonic :</b><span>  Keep body fit, active and increases Vitality and body strength. </span><br />
        <b>Ghanvati   :</b><span>   Effective for body strength & immunity. Cures piles, asthma. purify blood.</span><br />
        <b>Gaumutr Ark  :</b><span>  Reduces cholesterol, strengthens heart, brain & Liver. Effective in Cancer.</span><br />
        <b>Pain Relief Oil :</b><span>  Work well in relieving J oint Pain, Arthritis, Rheumatism.</span><br />
        <b>Diabetes Powder  :</b><span>   Very Effective Ayurvedic Medicine for Controlling Diabetes.</span><br />
        <b>Digestive Powder  :</b><span>  Cures acidity, indigestion, constipation, ulcers, high B.P, kill worms.</span><br />
        <b>Nasal Ayur Ghrit  :</b><span>  Cures migraine, sinus, stress, tension, insomnia, ear & more than 90 ailments.</span><br />
        <b>Eye Drops  :</b><span>  Relieves all discomforts related to eyes like red eyes, burning, itching, watery.</span>br
      
     </p>
      </div>
    </div>
  </div>
  )
}

export default DiseaseVsProducts
