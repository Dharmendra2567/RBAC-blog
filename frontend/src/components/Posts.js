import React from 'react'

const Posts = () => (
    <>
        {/* article */}
        <div className='card mb-2'>
            <img src='./images/cloudOverforest.jpeg' className='card-img-top w-100' style={{ height: '200px' }}></img>
            <div className='card-body m-3 py-0'>
                <p className='card-text'> <i class="bi bi-pencil-square me-2"></i>Article</p>
                <div className='d-flex justify-content-between align-items-center mb-1 '>
                    <h5 className='card-title me-5'>What if famous brand had regular fonts?Meet RegulaBrands!</h5>
                    <i class="bi bi-three-dots"></i>
                </div>
                <p className='card-text fs-6 custom-font mb-3'>I've worked in UX for a better part of decade. from now on, I plan to rei.. </p>
                <div className='d-flex justify-content-between '>
                    <div class="d-flex align-items-center">
                        <img src="./images/redCar.jpeg" class="rounded-circle" alt="User Profile" style={{ height: '30px', width: '30px' }} />
                        <span class="ms-2">Sarthak Kamra</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='card-text me-4'><i class="bi bi-eye me-3"></i>1.3k views</p>
                        <p className='cart-text'><i className='bi bi-share-fill' /></p>
                    </div>
                </div>
            </div>
        </div>
        {/* education */}
        <div className='card mb-2'>
            <img src='./images/taxBenefits.jpeg' className='card-img-top w-100' style={{ height: '200px' }}></img>
            <div className='card-body m-3 py-0'>
                <p className='card-text'> <i class="bi bi-pencil-square me-2"></i>Education</p>
                <div className='d-flex justify-content-betwen mb-3 '>
                    <h5 className='card-title me-5'>Tax Benefits for Investment unber Nation Pension Schema launched by Government.</h5>
                    <i class="bi bi-three-dots"></i>
                </div>
                <p className='card-text fs-5 custom-font mb-3'>I've worked in UX for a better part of decade. from now on, I plan to rei.. </p>
                <div className='d-flex justify-content-between '>
                    <div class="d-flex align-items-center">
                        <img src="./images/redCar.jpeg" class="rounded-circle" alt="User Profile" style={{ height: '30px', width: '30px' }} />
                        <span class="ms-2">Sarah West</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='card-text me-4'><i class="bi bi-eye me-3"></i>1.3k views</p>
                        <p className='cart-text'><i className='bi bi-share-fill' /></p>
                    </div>
                </div>
            </div>
        </div>

        {/* meet up */}
        <div className='card mb-2'>
            <img src='./images/redCar.jpeg' className='card-img-top w-100' style={{ height: '200px' }}></img>
            <div className='card-body m-3 py-0'>
                <p className='card-text'> <i class="bi bi-pencil-square me-2"></i>MeetUp</p>
                <div className='d-flex justify-content-betwen mb-3 '>
                    <h5 className='card-title me-5'>Finance and Investment Elite Socal Mixer @Lujiazui</h5>
                    <i class="bi bi-three-dots"></i>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex'>
                        <p className='card-text me-5' style={{ fontSize: '12px' }}><i className='bi bi-calendar3-week me-1' /> Fri,12,Oct,2018</p>
                        <p className='card-text' style={{ fontSize: '12px' }}><i className='bi bi-geo-alt me-1' />Ahmedabad, India</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' type='button' style={{ border: '1px solid #a5a1a1' }}>
                        <p className='m-0'>View Details</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between '>
                    <div class="d-flex align-items-center">
                        <img src="./images/redCar.jpeg" class="rounded-circle" alt="User Profile" style={{ height: '30px', width: '30px' }} />
                        <span class="ms-2">Ronal Jones</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='card-text me-4'><i class="bi bi-eye me-3"></i>1.3k views</p>
                        <p className='cart-text'><i className='bi bi-share-fill' /></p>
                    </div>
                </div>
            </div>
        </div>

        {/* Job */}
        <div className='card mb-2'>
              <div className='card-body m-3 py-0'>
                <p className='card-text'> <i class="bi bi-binoculars-fill me-2"></i>Job</p>
                <div className='d-flex justify-content-between mb-3 '>
                    <h5 className='card-title me-5'>Software Developer</h5>
                    <div>
                    <i class="bi bi-three-dots " type='button'></i>
                    </div>
                </div>
                <div className='d-block mb-3'>
                    <div className='d-flex'>
                        <p className='card-text me-5' style={{ fontSize: '12px' }}><i className='bi bi-bag=fill me-1' /> Innovaccer Analytics Private Ltd.</p>
                        <p className='card-text' style={{ fontSize: '12px' }}><i className='bi bi-geo-alt me-1' />Noida, India</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center ' type='button' style={{ border: '1px solid #a5a1a1' }}>
                        <p className='m-0 text-success'>Apply On TimesJobs</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between '>
                    <div class="d-flex align-items-center">
                        <img src="./images/redCar.jpeg" class="rounded-circle" alt="User Profile" style={{ height: '30px', width: '30px' }} />
                        <span class="ms-2">Joseph Gray</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='card-text me-4'><i class="bi bi-eye me-3"></i>1.3k views</p>
                        <p className='cart-text'><i className='bi bi-share-fill' /></p>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default Posts