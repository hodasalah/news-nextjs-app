import React from "react";

const Header = () => {
	return (
		<header id="header">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="header_top">
						<div className="header_top_left">
							<ul className="top_nav">
								<li>
									<a href="index.html">Home</a>
								</li>
								<li>
									<a href="/about">About</a>
								</li>
								<li>
									<a href="/contact">Contact</a>
								</li>
							</ul>
						</div>
						<div className="header_top_right">
							<p>Friday, December 05, 2045</p>
						</div>
					</div>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="header_bottom">
						<div className="logo_area">
							<a href="index.html" className="logo">
								<img src="varcel.svg" alt="img" />
							</a>
						</div>
						<div className="add_banner">
							<a href="#">
								<img
									src="https://via.placeholder.com/150"
									alt="img"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
