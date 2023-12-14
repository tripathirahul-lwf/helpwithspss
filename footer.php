<footer id="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <a href="index.html"><img src="" alt="logo" class="img-fluid logo-footer" /></a>
                <div class="footer-about">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, </p>
                </div>

            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-3 col-md-6">
                <div class="social-links">
                    <h5>Follow Us</h5>
                    <img src="./assets/images/about/home_line.png" alt="" />
                    <div class="social-icons">
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="address">
                    <h5>Address</h5>
                    <img src="./assets/images/about/home_line.png" alt="" class="img-fluid" />
                    <div class="address-links">
                        <li class="address1"><i class="fa-solid fa-location-dot"></i>Endeavour Hills Victoria, Australia PO Box: 3802 Australia</li>
                        <li><a href="tel:61488896118"><i class="fa-solid fa-phone"></i>+61 4888 96 118</a></li>
                        <li><a href="mailto:help@learnwithfraternity.com"><i class="fa-solid fa-envelope"></i>help@helpwithspss.com</a></li>
                    </div>
                </div>
            </div>

        </div>
    </div>

</footer>

<section id="copy-right">
    <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>
        lorem ispum lorem ispum 2012 - <span id="year"></span> Powerd By <a href="#">lorem ispum</a>


    </div>

</section>

<script>
    let year = document.getElementById('year');

    let fullYear = new Date().getFullYear();

    year.innerHTML = fullYear;
</script>