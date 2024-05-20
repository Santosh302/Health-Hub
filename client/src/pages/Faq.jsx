import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'
function Faq() {
  return (
    <HomeLayout>
    <div className='bg-body-tertiary'>
    <nav className='ms-5 me-5'
      style={{
        '--bs-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item fw-light fs-5">
          <Link to="/" className='text-decoration-none text-muted'>Home</Link>
        </li>
        <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">
          FAQs
        </li>
      </ol>
    </nav>
    <div className="card me-5 ms-5">
      <div className="card-body">
        <b style={{textDecoration: "underline"}}>FAQs(Frequently Asked Questions)</b><br /><br />
        
            <p>1. What is the difference between Jersy / Hybrid  and Indian / Desi Cows</p>
            <p>2. What is the meaning of  this brand name Health hub</p>
            <p>3. Which type of  Cows bi-products are used in the manufacturing of Health hub Products. (Desi Cows or Hybrid Cows)</p>
            <p>4. How long Gau-mutra ark can be preserved and used </p>
            <p>5. How to know  Health hub Products  dosage, benefits and ingredients</p>
            <p>6. Is Health hub have Ayurvedic Doctors / Gavya Sidha Vaidya/ Cow Therapist for Health Consultation</p>
            <p>7. Why Health hub Products are better than other products</p>
            <p>8. Is there any opportunity for Cow Lovers to serve into  GAU-SEVA Projects of Health hub.</p>
           <p>9. Is the Health hub COW Milk Powder is good as Fresh / Pasteurized Cow’s Milk</p>
           <p>10. What is the most practical approach of Gau-Raksha/ Gau-Seva as per todays scenario</p>
           <p>11. Why cow products are expensive as compare to market products</p>
           <p>12. Is the market available cow ghee is same as Health hub  COW Ghee</p>
           <p>13. Is it compulsory Cow Ghee color should be yellow </p>
           <p>14. From where to get the customer support related to Health hub COW Products</p>
           <p>15. How to enroll for the upcoming events / seminars/ medical camp of DOCTOR COW</p>
           <p>16. How we can distribute cow products as business for serving and earning</p>
           <p>17. How  can I get product development training/ consulting for my goshala to make self sustainable</p>
           <p>18. How  can i financially support to this divine project of Health hub COW to support Goshalas as Donator / Investor</p>
           <p>19. How to get updates about new product launch , offers</p>
           <p>20. How to place order by Online , Tele-Order, Whats-App, Email</p>
           <p>21. Do you ship Health hub COW Products all over India and Globally.</p>
           <p>22. What is the expiry date of Health hub COW Products</p>
           <p>23. Is the color, odor, fragrance, texture of ghee can change over a period of time</p>
           
      </div>
    </div>
  </div>
  </HomeLayout>
  )
}

export default Faq
