import React from 'react';
import HomeLayout from '../layouts/HomeLayout';
import { Link } from 'react-router-dom';
function Aboutus() {
  return (
    <HomeLayout>
    <div className='bg-body-tertiary'>
      <nav className='ms-5 me-5  '
        style={{
          '--bs-breadcrumb-divider': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`
        }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item fw-light fs-5"><Link to="/" className='text-decoration-none text-muted'>Home</Link></li>
          <li className="breadcrumb-item active text-dark fw-normal fs-5" aria-current="page">About Us</li>
        </ol>
      </nav>
      <div className="card  me-5 ms-5 ">
 
  <div className="card-body ">
    <p>
    HEALTHHUB.IN is the Online E-commerce Platform of Kalpavriksha Foundation to make Divine Cows Self Sustainable.  This organization was founded in 2009, by the inspiration of ISKCON Founder Acharya H.D.G. A.C Bhakti Vedanta Swami Prabhupada and with the blessings of H.H Gopal Krsna Goswami Maharaj Ji by his disciple Vaisnava Charan Das (Vivek Dhoot). He is B.Tech Engineer in Electronic & Communication with more than 15 years experience of managing his own Software Consulting  & Family Business. He is an initiated devotee and Life Member of ISKCON. His Gurudev instruction for the cow products distribution is his goal of life to bringup a final solution of GO-RAKSHA.
    </p><br />
    <p>
    The word Kalpavriksha means Desire fulfilling tree which is available in Lord Krishna’s abode. As mentioned in scriptures, GAUMATA is kamdhenu that can fulfill everyone’s desires. This organization is availing a real time opportunity to the society for Health, Wealth and Devotional Prosperity through GOSEVA. KALPAVRIKSHA envisions to Connect ALL Cow Lovers through a campaign - SERVE OUR MOTHER COW.  Objective is to create awareness about the importance of Cow Bi-Products in terms of HEALTH, WEALTH & DEVOTION. This will finally help in the implementation of Varnashram System in the Society.
    </p> <br />
    <p>
    Inorder to find out the root solution of cow slaughter and to support more than 5000 goshalas of india who are in heavy financial crises. Founder of this project got an initial learning by Shri Gopal Goverdhan Gaushala, Pathmeda, Rajasthan, a great institution serving more than 125000 Govansh since 1993 to bring up a cow self sustainable model. KALPAVRIKSHA FOUNDATION has launched the first Unified Brand - HEALTH HUB to support all Goshalas. This Organization is assisting goshalas , by purchasing Cow Panchgavya ( five products obtained from the cow, viz. dung, urine, milk, ghee and curd) from them, hence indirectly bartering divine gavyas against sumptuous grass, water and shelter for the Mother Cow. Thus transforming loss making goshala into profit oriented goshala by optimum utilization of their unused dung and urine through Technical Training & Consultancy program to manufacture quality products and finally help them to Market globally. By this initiative, KALPAVRIKSHA is saving lot of funds and resources of Gaushalas for creating a standardization in cow products to glorify the mother cow.
    </p><br />
    <p>
    KALPAVRIKSHA's is having Technical Colloboration with SEPL, Bhopal for their R&D activities. SEPL is an ISO & GMP Certified Unit, having license from AYUS & FSSAI for Quality Products Development & Goshala/ Rural Consultancy. KALPAVRIKSHA is closely affiliated with GOSHALA, San Tan Valley, Arizona, USA. GOSHALA was established in April 2010, inspired by H.H. Ganpati Swami Maharaj and affiliated with ISCOWP (International Society for Cow Protection), founded by HG Balabhadra das- both Senior disciples of Srila Prabhupada. Presently KALPAVRIKSHA is contributing to more than 20 Goshalas in different states of India for self sustainability.
    </p><br />
    <p>
    This divine project is blessed and supported by the prominent personalities, advisors, R&D Institutes and thousands of volunteers. Propagating cow pathy teachings given by prominent health speakers like Shri Baba Ramdev Ji, Shri Uttam Maheshwari Ji, Shri Rajeev Dixit ji etc. One of the most popular cow event “Holy Cow Festival” was introduced by Kalpavriksha Foundation in 2012 for giving awards to Go-Sevaks and given self sustainable seminar to more than 120 goshalas of the country by Smt. Menaka Gandhi Ji, Sri Sunil Mansinga Ji, Shri Uttam Maheshwari Ji & Shri.Sahadeva dasa.
    </p><br />
    <p>
    Profit of HEALTH HUB Products is used for GAU-SEVA and GOPAL SEVA
    </p><br />
  </div>
</div>
    </div>
    </HomeLayout>
  );
}

export default Aboutus;
