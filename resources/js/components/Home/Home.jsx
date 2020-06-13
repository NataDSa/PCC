import React from 'react';

class Home extends React.Component {

    render() {
        return (
<div className="home">
                <div className="menu_container menu_mm">

		<div className="menu_close_container">
			<div className="menu_close"></div>
		</div>

		
		<div className="menu_inner menu_mm">
			<div className="menu menu_mm">
				<ul className="menu_list menu_mm">
					<li className="menu_item menu_mm"><a href="index.html">Home</a></li>
					<li className="menu_item menu_mm"><a href="about.html">About us</a></li>
					<li className="menu_item menu_mm"><a href="services.html">Services</a></li>
					<li className="menu_item menu_mm"><a href="news.html">News</a></li>
					<li className="menu_item menu_mm"><a href="contact.html">Contact</a></li>
				</ul>
			</div>
			<div className="menu_extra">
				<div className="menu_appointment"><a href="#">Request an Appointment</a></div>
				<div className="menu_emergencies">For Emergencies: +563 47558 623</div>
			</div>

		</div>
</div>
    <div className="home">
		<div className="home_slider_container">

			<div className="owl-carousel owl-theme home_slider">
				
				<div className="owl-item">
					<div className="home_slider_background"> 
                    <div className="home_slider_background" style={{ backgroundImage: "url(images/home_background_1.jpg)"}}></div>
					<div className="home_content">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_content_inner">
										<div className="home_title"><h1>Medicine made with care</h1></div>
										<div className="home_text">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu.</p>
										</div>
										<div className="button home_button">
											<a href="#">read more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="owl-item">
					<div className="home_slider_background" style={{ backgroundImage: "url(images/home_background_1.jpg)"}}></div>
					<div className="home_content">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_content_inner">
										<div className="home_title"><h1>Medicine made with care</h1></div>
										<div className="home_text">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu.</p>
										</div>
										<div className="button home_button">
											<a href="#">read more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="owl-item">
					<div className="home_slider_background" style={{ backgroundImage: "url(images/home_background_1.jpg)"}}></div>
					<div className="home_content">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_content_inner">
										<div className="home_title"><h1>Medicine made with care</h1></div>
										<div className="home_text">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu.</p>
										</div>
										<div className="button home_button">
											<a href="#">read more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className="home_slider_progress"></div>
		</div>
	</div>
    </div>
    </div>
        );
    }
}

export default Home;