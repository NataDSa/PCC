import React from 'react';

class Header extends React.Component {

	render() {
		return (


			<header className="header trans_200">
				<div className="super_container">
					<div className="top_bar">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
										<div className="top_bar_item"><a href="#">Записаться на приём</a></div>
									</div>

								</div>
							</div>
						</div>
					</div>

					<div className="header_container">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="header_content d-flex flex-row align-items-center justify-content-start">
										<nav className="main_nav ml-auto">
											<ul>
												<li><a href="Index.jsx">Главная</a></li>
												<li><a href="About.jsx">О нас</a></li>
												<li><a href="Services.jsx">Услуги</a></li>
												<li><a href="Contact.jsx">Контакты</a></li>
											</ul>
										</nav>
										<div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="logo_container_outer">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="logo_container">
										<a href="#">
											<div className="logo_content d-flex flex-column align-items-start justify-content-center">
												<div className="logo_line"></div>
												<div className="logo d-flex flex-row align-items-center justify-content-center">
													<div className="logo_text">Care<span>Med</span></div>
													<div className="logo_box">+</div>
												</div>
												<div className="logo_sub">Health Care Center</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;