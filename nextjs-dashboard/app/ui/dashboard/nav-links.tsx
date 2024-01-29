@extends($activeTemplate.'layouts.frontend')
@section('content')
@php
  $planCaption = getContent('plan.content',true);
  $plans = \App\Models\Plan::where('status', 1)->where('featured', 1)->get();
@endphp

<main class="nk-pages">
            <section class="section no-pd overflow-hidden text-center over-up">
                <h6 class="title title-xs tc-secondary pdb-s animated" data-animate="fadeInUp" data-delay=".8">Company rating</h6>
                <ul class="rank-list">
                    <li class="rank-item animated" data-animate="fadeInUp" data-delay=".9">
                        <img src="images/logo/a.png" alt="">
                        <div class="rank-count">4.7 <span>/5</span></div>
                    </li>
                    <li class="rank-item animated" data-animate="fadeInUp" data-delay="1">
                        <img src="images/logo/b.png" alt="">
                        <div class="rank-count">A</div>
                    </li>
                    <li class="rank-item animated" data-animate="fadeInUp" data-delay="1.1">
                        <img src="images/logo/c.png" alt="">
                        <div class="rank-count">9.4 <span>/10</span></div>
                    </li>
                    <li class="rank-item animated" data-animate="fadeInUp" data-delay="1.2">
                        <img src="images/logo/d.png" alt="">
                        <div class="rank-count">4.9 <span>/5</span></div>
                    </li>
                    <li class="rank-item animated" data-animate="fadeInUp" data-delay="1.3">
                        <img src="images/logo/e.png" alt="">
                        <div class="rank-count">5 <span>/5</span></div>
                    </li>
                </ul>
            </section>
            <!-- // -->
            <section class="section bg-light section-about" id="about">
                <div class="container">
                    <!-- Block @s -->
                    <div class="nk-block nk-block-about">
                        <div class="row gutter-vr-30px align-items-center pdb-l">
                            <div class="col-lg-6">
                                <div class="nk-block-text">
                                    <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">About Primevest</h2>
                                    <p class="animated" data-animate="fadeInUp" data-delay=".2"><strong>Primevest is your #1 investment service provider</strong> We have immersively achieved a great Breakthrough in the Leading financial Market and has earned the trust of investor all over the world. We offer the best Service to ensure that all our investors earns a profitable percentage, our investment strategy consist of highly qualified Analytical trading expert specialized for the task. </p>
                                    <p class="animated" data-animate="fadeInUp" data-delay=".3">Primevest experts has been weirdly recognized as one of the world best investment Agencies, Our dedication to Capital raising is unparallel, in other to be able to Analyze the market Movement Adequately,We provide a steady,Comprehensive and good Services aimed at meeting the highest demands of our clients, how the high standards can be Verified by the growing number of Clients for Long Since we are a law abiding company registered in New Zealand, providing our Services to The Members all over the world.</p>
                                    <!--<p class="animated" data-animate="fadeInUp" data-delay=".4">We create cryptocurrency dipiscing elit, sed do eiusmod tempor incididunt uteop labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercit ullamco laboris nisi commodo consequat.</p>-->
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="nk-block-video animated" data-animate="fadeInUp" data-delay=".5">
                                    <img src="images/video/a.png" alt="video">
                                    <a href="https://www.youtube.com/watch?v=DmWGHJKOkGw" class="nk-block-video-play video-popup btn-play btn-play-light"><em class="fas fa-play"></em></a>
                                </div>
                            </div>
                        </div>
                    </div><!-- .block @e -->
                    <!-- Section Head @s -->
                    <div class="section-head">
                        <h2 class="title title-lg animated" data-animate="fadeInUp" data-delay=".6">Key features of Primevest</h2>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-features mgb-m30">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="feature animated" data-animate="fadeInUp" data-delay=".7">
                                    <div class="feature-icon dot">
                                        <em class="icon ikon ikon-paricle-alt"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h5 class="title title-sm">Secure decentralize</h5>
                                        <p>Our system is completly secured used the best and latest blockchain security available.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="feature animated" data-animate="fadeInUp" data-delay=".8">
                                    <div class="feature-icon dot">
                                        <em class="icon ikon ikon-donught"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h5 class="title title-sm">Solving small business problems</h5>
                                        <p>We focus on small establishments aroun the globe and help them achieve maximun output. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="feature animated" data-animate="fadeInUp" data-delay=".9">
                                    <div class="feature-icon dot">
                                        <em class="icon ikon ikon-document"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h5 class="title title-sm">Personal data secured</h5>
                                        <p>Our clients data and activities are secured with and we have no third-party access.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- .block @s -->
                </div>
            </section>
            <!-- // -->
<!--            <section class="section section-features bg-white" id="features">-->
<!--                <div class="container">-->
                    <!-- Block @s -->
<!--                    <div class="nk-block nk-block-features-s2">-->
<!--                        <div class="row align-items-center flex-row-reverse">-->
<!--                            <div class="col-lg-5">-->
<!--                                <div class="gfx py-4 animated" data-animate="fadeInUp" data-delay=".1">-->
<!--                                    <img src="images/gfx/gfx-a.png" alt="gfx">-->
<!--                                </div>-->
<!--                            </div><!-- .col -->
<!--                            <div class="col-lg-7">-->
                                <!-- Section Head @s -->
<!--                                <div class="section-head">-->
<!--                                    <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">Why Choose Us</h2>-->
<!--                                    <p class="animated" data-animate="fadeInUp" data-delay=".3">Our investors all over the globe trust us for the following reasons </p>-->
<!--                                </div><!-- .section-head @e -->
<!--                                <div class="features-list mr-4 mgb-m30">-->
<!--                                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".4">-->
<!--                                        <div class="feature-icon dot">-->
<!--                                            <em class="icon ikon ikon-shiled-alt"></em>-->
<!--                                        </div>-->
<!--                                        <div class="feature-text">-->
<!--                                            <h5 class="title title-sm">Secured User Data</h5>-->
<!--                                            <p>We keep your data secured and protected with our secured servers. We have our industry best (SSL) Services.</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".5">-->
<!--                                        <div class="feature-icon dot">-->
<!--                                            <em class="icon ikon ikon-user"></em>-->
<!--                                        </div>-->
<!--                                        <div class="feature-text">-->
<!--                                            <h5 class="title title-sm">Support 24/7</h5>-->
<!--                                            <p>You can find any answer to your questions in the FAQ Page. If you need help please contact us any time 24/7.-->
<!--</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".6">-->
<!--                                        <div class="feature-icon dot">-->
<!--                                            <em class="icon ikon ikon-data-server"></em>-->
<!--                                        </div>-->
<!--                                        <div class="feature-text">-->
<!--                                            <h5 class="title title-sm">Daily Income-->
<!--</h5>-->
<!--                                            <p>Your income is added to your account based on your investment every 24 hours automatically-->
<!--</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="feature feature-s2 animated" data-animate="fadeInUp" data-delay=".6">-->
<!--                                        <div class="feature-icon dot">-->
<!--                                            <em class="icon ikon ikon-data-server"></em>-->
<!--                                        </div>-->
<!--                                        <div class="feature-text">-->
<!--                                            <h5 class="title title-sm">Fast withdrawals-->

<!--</h5>-->
<!--                                            <p>An automated platform handles adding of deposits fast enough and offers Fastest Payments directly into your wallet.-->
<!--</p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div><!-- .col -->
<!--                        </div><!-- .row -->
<!--                    </div><!-- .block @e -->
<!--                </div>-->
<!--            </section>-->
            
            <section class="section section-solution bg-light pt-0" id="solution">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto-sm">
                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Why Choose Us</h2>
                        <p class="animated" data-animate="fadeInUp" data-delay=".2">Our investors all over the globe trust us for the following reasons</p>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-features-s3">
                        <div class="row gutter-vr-40px justify-content-center">
                            <div class="col-lg-6 col-md-10">
                                <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".3">
                                    <div class="feature-icon feature-icon-lg">
                                        <em class="icon icon-lg ikon ikon-cloud"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title title-md title-dark">Safe and Secured</h4>
                                        <p>We keep your data secured and protected with our secured servers. We have our industry best (SSL) Services.</p>
                                    </div>
                                </div>
                            </div><!-- .col -->
                            <div class="col-lg-6 col-md-10">
                                <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".4">
                                    <div class="feature-icon feature-icon-lg">
                                        <em class="icon icon-lg ikon ikon-safety"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title title-md title-dark">247 Support team</h4>
                                        <p>ou can find any answer to your questions in the FAQ Page. If you need help please contact us any time 24/7.</p>
                                    </div>
                                </div>
                            </div><!-- .col -->
                            <div class="col-lg-6 col-md-10">
                                <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".5">
                                    <div class="feature-icon feature-icon-lg">
                                        <em class="icon icon-lg ikon ikon-cash"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title title-md title-dark">Fast Withdrawals </h4>
                                        <p>An automated platform handles adding of deposits fast enough and offers Fastest Payments directly into your wallet.</p>
                                    </div>
                                </div>
                            </div><!-- .col -->
                            <div class="col-lg-6 col-md-10">
                                <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".6">
                                    <div class="feature-icon feature-icon-lg">
                                        <em class="icon icon-lg ikon ikon-globe"></em>
                                    </div>
                                    <div class="feature-text">
                                        <h4 class="title title-md title-dark">Daily Income </h4>
                                        <p>Your income is added to your account based on your investment every 24 hours automatically</p>
                                    </div>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .block @e -->
                </div>
            </section>
            
            <!--jjkdm-->
            
            <section class="section section-roadmap bg-white" id="roadmap">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto">
                        <h6 class="title title-xs title-light animated" data-animate="fadeInUp" data-delay=".1">HOW IT WORKS</h6>
                        <h2 class="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".2">Our simplified procedure</h2>
                        <p class="animated" data-animate="fadeInUp" data-delay=".3">Below is how to get started on Primevest </p>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-roadmap">
                        <div class="row justify-content-center">
                            <div class="col-xl-10">
                                <div class="roadmap-wrap">
                                    <div class="roadmap-line"></div>
                                    <div class="roadmap animated" data-animate="fadeInUp" data-delay=".4">
                                        <div class="roadmap-year">Prime</div>
                                    </div>
                                    <div class="roadmap roadmap-right roadmap-finished animated" data-animate="fadeInUp" data-delay=".5">
                                        <div class="roadmap-step">
                                            <div class="roadmap-head">
                                                <span class="roadmap-time">#1</span>
                                                <span class="roadmap-title">Create an account</span>
                                            </div>
                                            <p>Creating an account is easy and free, kindly click on any of the register buttons, fill out the details and sign up.</p>
                                        </div>
                                    </div>
                                    <div class="roadmap roadmap-left roadmap-finished animated" data-animate="fadeInUp" data-delay=".6">
                                        <div class="roadmap-step">
                                            <div class="roadmap-head">
                                                <span class="roadmap-time">#2</span>
                                                <span class="roadmap-title">Fund account</span>
                                            </div>
                                            <p>once your account creation is completed you will have access to youe dashboard where you can safely fund your account</p>
                                        </div>
                                    </div>
                                    <div class="roadmap roadmap-left roadmap-finished animated" data-animate="fadeInUp" data-delay=".6">
                                        <div class="roadmap-step">
                                            <div class="roadmap-head">
                                                <span class="roadmap-time">#3</span>
                                                <span class="roadmap-title">Pick A package</span>
                                            </div>
                                            <p>Once your account is funded pick any of our plans and start making daily earnings</p>
                                        </div>
                                    </div>
                                    <!--<div class="roadmap animated" data-animate="fadeInUp" data-delay=".4">-->
                                    <!--    <div class="roadmap-year">2022</div>-->
                                    <!--</div>-->
                                    <!--<div class="roadmap roadmap-right animated" data-animate="fadeInUp" data-delay=".5">-->
                                    <!--    <div class="roadmap-step">-->
                                    <!--        <div class="roadmap-head">-->
                                    <!--            <span class="roadmap-time">Q1 2022</span>-->
                                    <!--            <span class="roadmap-title">Public Token Sale Begins</span>-->
                                    <!--        </div>-->
                                    <!--        <p>Public ICO launch and crowd-sale starts - 5th Januray &amp; Token distribution will commence - 2nd March.</p>-->
                                    <!--    </div>-->
                                    <!--</div>-->
                                    <!--<div class="roadmap roadmap-left animated" data-animate="fadeInUp" data-delay=".6">-->
                                    <!--    <div class="roadmap-step">-->
                                    <!--        <div class="roadmap-head">-->
                                    <!--            <span class="roadmap-time">Q2 2022</span>-->
                                    <!--            <span class="roadmap-title">Beta App User Testing</span>-->
                                    <!--        </div>-->
                                    <!--        <p>Release our first apps for beta testing to our members comunity</p>-->
                                    <!--    </div>-->
                                    <!--</div>-->
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                        <div class="text-center animated" data-animate="fadeInUp" data-delay=".4">
                            <a href="#" class="btn btn-grad">Get started</a>
                        </div>
                    </div>
                    <!-- Block @e -->
                </div>
            </section>
            <!-- // -->
            <section class="section section-problem bg-light" id="problem">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto-sm">
                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Problem and Challenge</h2>
                        <p class="animated" data-animate="fadeInUp" data-delay=".2">We are creating modular software, apps blockchain solutions that helps our investors make more money and profits</p>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-problems tc-light">
                        <div class="row no-gutters align-items-center">
                            <div class="col-lg-6">
                                <div class="feature boxed boxed-lg bg-theme no-mg split-lg-left split-left animated" data-animate="fadeInUp" data-delay=".3">
                                    <h4 class="title title-md">Automation Solutions</h4>
                                    <p>Our services ranging from profits earning to withdrawal are automated to ensure utra fast services</p>
                                    <ul class="list list-dot">
                                        <li>Instant ptofit count</li>
                                        <li>Instant withdrawal</li>
                                        <li>Online support team</li>
                                        <!--<li>Exercitation ullamco laboris nisi ut consequ.</li>-->
                                    </ul>
                                </div>
                            </div><!-- .col -->
                            <div class="col-lg-6">
                                <div class="feature-group bg-theme-alt split-right split-lg animated" data-animate="fadeInUp" data-delay=".4">
                                    <div class="feature boxed bg-white-10">
                                        <div class="feature-text">
                                            <h4 class="title title-md">Low transfer fees</h4>
                                            <p>Our services comes with no services charges or hidden fee, we allow our customers take charge of their investment</p>
                                        </div>
                                    </div>
                                    <div class="feature boxed bg-white-2">
                                        <div class="feature-text">
                                            <h4 class="title title-md">Scaling and Absolete Tool</h4>
                                            <p>Scalling is biggest problem that comes rem aperiam, et quasi arch itecto beatae vitae dicta sunt explicabo. Voluptas sit aspern odit aut fugit illum qui dolorem eum.</p>
                                        </div>
                                    </div>
                                    <div class="feature boxed bg-black-10">
                                        <div class="feature-text">
                                            <h4 class="title title-md">Secure Networks &amp; Flexibility</h4>
                                            <p>Security is most concern for long investment and we have been scaling over the years pushing up for our investors</p>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .block @e -->
                </div>
            </section>
            <!-- // -->
            <!--<section class="section section-solution bg-light pt-0" id="solution">-->
            <!--    <div class="container">-->
                    <!-- Section Head @s -->
            <!--        <div class="section-head text-center wide-auto-sm">-->
            <!--            <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Solutions</h2>-->
            <!--            <p class="animated" data-animate="fadeInUp" data-delay=".2">We are creating modular software, apps blockchain based accusamus et eiusto odio dignimus qui blan ditiis praes entium volup tatun.</p>-->
            <!--        </div><!-- .section-head @e -->
                    <!-- Block @s -->
            <!--        <div class="nk-block nk-block-features-s3">-->
            <!--            <div class="row gutter-vr-40px justify-content-center">-->
            <!--                <div class="col-lg-6 col-md-10">-->
            <!--                    <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".3">-->
            <!--                        <div class="feature-icon feature-icon-lg">-->
            <!--                            <em class="icon icon-lg ikon ikon-cloud"></em>-->
            <!--                        </div>-->
            <!--                        <div class="feature-text">-->
            <!--                            <h4 class="title title-md title-dark">Global Single-Platform:</h4>-->
            <!--                            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid eos qui ratione</p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div><!-- .col -->
            <!--                <div class="col-lg-6 col-md-10">-->
            <!--                    <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".4">-->
            <!--                        <div class="feature-icon feature-icon-lg">-->
            <!--                            <em class="icon icon-lg ikon ikon-safety"></em>-->
            <!--                        </div>-->
            <!--                        <div class="feature-text">-->
            <!--                            <h4 class="title title-md title-dark">Be Safe and Secure:</h4>-->
            <!--                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia agni dolores eos qui ratione voluptatem sequi</p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div><!-- .col -->
            <!--                <div class="col-lg-6 col-md-10">-->
            <!--                    <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".5">-->
            <!--                        <div class="feature-icon feature-icon-lg">-->
            <!--                            <em class="icon icon-lg ikon ikon-cash"></em>-->
            <!--                        </div>-->
            <!--                        <div class="feature-text">-->
            <!--                            <h4 class="title title-md title-dark">Decentralize Payment Systems</h4>-->
            <!--                            <p>Empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris fugiat nulla sed do</p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div><!-- .col -->
            <!--                <div class="col-lg-6 col-md-10">-->
            <!--                    <div class="feature feature-s3 feature-center animated" data-animate="fadeInUp" data-delay=".6">-->
            <!--                        <div class="feature-icon feature-icon-lg">-->
            <!--                            <em class="icon icon-lg ikon ikon-globe"></em>-->
            <!--                        </div>-->
            <!--                        <div class="feature-text">-->
            <!--                            <h4 class="title title-md title-dark">Blockchain Based DevOps Marketplace</h4>-->
            <!--                            <p>Ut enim ad minim veniam, quis nostrud ullamco laboris fugiat nulla sed do eiusmod. Empor incididunt ut labore et dolore magna</p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div><!-- .col -->
            <!--            </div><!-- .row -->
            <!--        </div><!-- .block @e -->
            <!--    </div>-->
            <!--</section>-->
            <!-- // -->
            <section class="section section-product bg-white" id="products">
                <div class="container">
                    <!-- Block @s -->
                    <div class="nk-block nk-block-features-s4 mgb-m30">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="section-head">
                                    <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">We make it happen</h2>
                                    <p class="animated" data-animate="fadeInUp" data-delay=".2">We have created a secured system to enable all our investors earn daily. and Build their crypto-based portfolio and enjoy benefits not offered by most exchanges, such as near-immediate execution of market orders.</p>
                                </div>
                            </div><!-- .col -->
                            <div class="col-lg-4 col-sm-6">
                                <a href="#" class="feature feature-s4 feature-center animated" data-animate="fadeInUp" data-delay=".3">
                                    <div class="feature-img">
                                        <img src="images/products/a.jpg" alt="product">
                                    </div>
                                    <h5 class="title title-sm title-dark">We trade all coins </h5>
                                </a>
                            </div><!-- .col -->
                            <div class="col-lg-4 col-sm-6">
                                <a href="#" class="feature feature-s4 feature-center animated" data-animate="fadeInUp" data-delay=".4">
                                    <div class="feature-img">
                                        <img src="images/products/b.jpg" alt="product">
                                    </div>
                                    <h5 class="title title-sm title-dark">We support our customers</h5>
                                </a>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .block @e -->
                </div>
            </section>
            
            <!-- // -->
             <section class="bg-theme bg-pattern-dots" id="tokensale">
                <div class="section section-tokensale tc-light">
                    <div class="container">
                        <!-- Section Head @s -->
                        <div class="section-head text-center wide-auto">
                            <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Primevest transactions</h2>
                            <p class="animated" data-animate="fadeInUp" data-delay=".2">Below is the recent transactions on our system</p>
                        </div><!-- .section-head @e -->
                        <!-- Block @s -->
                        <div class="nk-block nk-block-token mgb-m30">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="token-info bg-theme animated" data-animate="fadeInUp" data-delay=".3">
                                        <h4 class="title title-md mb-2 text-sm-center">Sales Information</h4>
                                        <table class="table table-token">
                                            <tbody>
                                                <tr>
                                                    <td class="table-head">Public Sale Starts</td>
                                                    <td class="table-des">15th Dec 2023 12:00 GMT</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Public Sale Ends</td>
                                                    <td class="table-des">14th Jan 2024 12:00 GMT</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Total Token Supply</td>
                                                    <td class="table-des">500,000,000</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Tokens Allocated for ICO</td>
                                                    <td class="table-des">350,000,000</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Hard Cap</td>
                                                    <td class="table-des">$4.75m</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Soft Cap</td>
                                                    <td class="table-des">$1.75m</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Token Value</td>
                                                    <td class="table-des">1 ETH = 1,000 ICOX</td>
                                                </tr>
                                                <tr>
                                                    <td class="table-head">Accepted</td>
                                                    <td class="table-des">ETH, BTC</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div><!-- .col -->
                                <div class="col-lg-5">
                                    <div class="animated" data-animate="fadeInUp" data-delay=".4">
                                        <div class="token-status bg-theme">
                                            <h4 class="title title-md">Our stats</h4>
                                            <div class="token-countdown countdown" data-date="2022/04/22"></div>
                                            <div class="progress-wrap progress-wrap-point">
                                                <span class="progress-info">Current invested <span>$674,830,985</span></span>
                                                <div class="progress-bar">
                                                    <div class="progress-percent bg-grad" data-percent="30"></div>
                                                    <div class="progress-point progress-point-1">Withdrawn <span>$89.75m</span></div>
                                                    <div class="progress-point progress-point-2">Deposit <span>$674.75m</span></div>
                                                </div>
                                            </div>
                                            <a href="#" class="btn btn-grad">Register &amp; Now</a>
                                            <span class="token-min">Minimum Purchase: $300</span>
                                        </div>
                                        <div class="bonus bg-theme">
                                            <div class="bonus-info">
                                                <div class="bonus-percent">10% <small>Referral Bonus</small></div>
                                                <div class="bonus-date">Get started</div>
                                                <span class="bonus-badge badge-xs">Now</span>
                                            </div>
                                            <div class="bonus-info">
                                                <div class="bonus-percent">25%<small>Bonus</small></div>
                                                <div class="bonus-date">get started</div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- .col -->
                            </div><!-- .row -->
                        </div><!-- .block @e -->
                    </div>
                </div><!-- .section-tokensale -->
     <!--            <section class="bg-half-80 d-table w-100" style="background: url(images/bg/bg_intro.jpg); background-size: cover;">-->
     <!--    <div class="container">-->
     <!--        <div class="row mt-5 justify-content-center">-->
     <!--            <div class="col-12">-->
     <!--                <div class="title-heading text-center">-->
     <!--                    <small class="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Investment Plans</small>-->
     <!--                    <h5 class="heading fw-semibold mb-0 page-heading text-white">Our Plans</h5>-->
     <!--                </div>-->
     <!--            </div>-->
                 <!--end col-->
     <!--        </div>-->
             <!--end row-->
     <!--    </div>-->
         <!--end container-->
     <!--</section>-->
     <!--end section-->

     <section class="section bg-light">
         <div class="container">
             <div class="row align-items-center">
                 <div class="col-12">
                     <div class="section-title text-center mb-4 pb-2">
                         <h6 class="text-primary">Pricing Plan</h6>
                         <h4 class="title fw-semibold mt-2 mb-3">Our Best Investments</h4>
                         <p class="text-muted para-desc mx-auto mb-0">We give you the option to switch investment as your financial circumstances changes. You can change how you invest to suit your needs without additional costs!</p>
                     </div>
                 </div>
                 <!--end col-->
             </div>
             <!--end row-->

             <div class="row cont hide_con">
 @foreach($plans as $k => $data)
          @php
            $time_name = \App\Models\TimeSetting::where('time', $data->times)->first();
            @endphp
                 
                         <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                             <div class="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg-white">
                                 <div class="mb-5">
                                     <h1 class="display-4 fw-medium mb-0">{{__($data->interest)}}{{($data->interest_status == 1) ? '%': __($general->cur_text)}}</h1>
                                     <p class="text-muted mb-0">Daily Profit</p>
                                 </div>

                                 <div class="p-2 bg-light h6 mx-5 rounded-lg">
                                     <span class="text-dark text-uppercase">{{@$data->name}}</span>
                                 </div>

                                 <ul class="list-unstyled mb-0 mt-4">
                                     <li class="text-muted mt-3">Minimum Deposit: <br> <strong>{{__($general->cur_sym)}}{{__($data->minimum)}} </strong></li>
                                     <li class="text-muted mt-3">Maximum Deposit: <br> <strong>{{__($general->cur_sym)}}{{__($data->maximum)}}</strong></li>
                                     <li class="text-muted mt-3">Contact Duration: <br> <strong> @if($data->lifetime_status == 0) {{__($data->repeat_time)}} {{__($time_name->name)}} @else @lang('Lifetime') @endif</strong></li>
                                     <li class="text-muted mt-3">10% referrer Bonus</li>

                                 </ul>

                                 <div class="mt-4 pt-2">
                                     <a href="/login" class="btn btn-light">Start Now</a>
                                 </div>
                             </div>
                         </div>

                 @endforeach
                        
                 
             </div>
             <!--end row-->
         </div>
         <!--end container-->
     </section><!-- .section-tokendes -->
            </section>
            <!-- // -->
            <section class="section bg-light section-document" id="documents">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto">
                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Become An Affiliate</h2>
                        <p class="animated" data-animate="fadeInUp" data-delay=".2">Join our team of affiliate marketers and make over 10% .</p>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-document">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <div class="card card-lg animated" data-animate="fadeInUp" data-delay=".3">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="nk-block-img px-4 pb-4 pb-md-0">
                                                <img src="images/doc-a.png" alt="doc">
                                            </div>
                                        </div><!-- .col -->
                                        <div class="col-md-6">
                                            <div class="nk-block-text">
                                                <h4 class="title title-md">Let's Partner Up</h4>
                                                <p>When our registered users share their referral link which can be found in the referral page of their dashboard, they earn a bonus of 5% to a maximum of 10% on every deposit made by their referred member.</p>
                                                <ul class="btn-grp gutter-30px gutter-vr-20px">
                                                    <li><a href="#" class="btn btn-grad">Join Affiliate</a></li>
                                                    <li><a href="#" class="link"><em class="link-icon fas fa-file-alt"></em> <span>Access dashboard</span></a></li>
                                                </ul>
                                            </div>
                                        </div><!-- .col -->
                                    </div><!-- .row -->
                                </div><!-- .box -->
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .block @e -->
                </div>
            </section>
            <!-- // -->
            <!--<section class="section section-wallet bg-white" id="app-download">-->
            <!--    <div class="container">-->
                    <!-- Block @s -->
            <!--        <div class="nk-block nk-block-text-wrap">-->
            <!--            <div class="row align-items-center justify-content-center flex-row-reverse">-->
            <!--                <div class="col-lg-7 mb-4 mb-lg-0">-->
            <!--                    <div class="nk-block-img bg-pattern-dots-color">-->
            <!--                        <div class="app-slide-wrap animated" data-animate="fadeInUp" data-delay=".1">-->
            <!--                            <div class="app-slide">-->
            <!--                                <img src="images/app-screens/a.jpg" alt="App Screen">-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="col-lg-5 col-md-10 text-center text-lg-left">-->
            <!--                    <div class="nk-block-text">-->
            <!--                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">Our Powerful <br class="d-none d-md-block"> All-In-One Wallets</h2>-->
            <!--                        <p class="animated" data-animate="fadeInUp" data-delay=".2">ICOX Wallets is most secure am libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>-->
            <!--                        <div class="pdt-m animated" data-animate="fadeInUp" data-delay=".3">-->
            <!--                            <a href="#" class="btn btn-grad">Download Now</a>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
            <!--        </div><!-- .block @e -->
            <!--    </div>-->
            <!--</section>-->
            <!-- // -->
            <!--<section class="section section-wallet-bottom bg-white pdt-0" id="wallet">-->
            <!--    <div class="container">-->
                    <!-- Block @s -->
            <!--        <div class="nk-block nk-block-text-grp mgb-m30">-->
            <!--            <h6 class="title title-xs tc-primary pdb-s animated" data-animate="fadeInUp" data-delay=".4">Why Use Tokenpay Wallets?</h6>-->
            <!--            <div class="row">-->
            <!--                <div class="col-lg-4">-->
            <!--                    <div class="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".5">-->
            <!--                        <h4 class="title title-md">Safe &amp; Secure</h4>-->
            <!--                        <p>Tempore, cum soluta nobis est eligendi optio cumque nihil id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor impedit quo minus repellendus. </p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="col-lg-4">-->
            <!--                    <div class="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".6">-->
            <!--                        <h4 class="title title-md">Universal and Interactive</h4>-->
            <!--                        <p>Placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="col-lg-4">-->
            <!--                    <div class="feature feature-s5 animated" data-animate="fadeInUp" data-delay=".7">-->
            <!--                        <h4 class="title title-md">Send and Receive</h4>-->
            <!--                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor. </p>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div><!-- .row -->
            <!--        </div><!-- .block @e -->
            <!--    </div>-->
            <!--</section>-->
            <!-- // -->
            <!--<section class="section tc-light bg-theme-grad" id="admin-intro">-->
            <!--    <div class="container">-->
                    <!-- Block @s -->
            <!--        <div class="nk-block nk-block-text-wrap">-->
            <!--            <div class="row align-items-center">-->
            <!--                <div class="col-lg-7 order-lg-last">-->
            <!--                    <div class="nk-block-img edge-r1 pb-4 pb-lg-0 animated" data-animate="fadeInUp" data-delay=".1">-->
            <!--                        <img src="images/app-screens/laptop-a.png" alt="app">-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--                <div class="col-lg-5">-->
            <!--                    <div class="nk-block-text">-->
            <!--                        <h6 class="title title-xs tc-primary animated" data-animate="fadeInUp" data-delay=".1">Ico Admin Dashboard</h6>-->
            <!--                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".2">Introducing Complete Admin Dashboard</h2>-->
            <!--                        <p class="animated" data-animate="fadeInUp" data-delay=".3">We designed the ICO Admin panel to mange back-end of ICO Token Sales. It’s allows to mange every thing such as KYC, Users, Transaction etc.</p>-->
            <!--                        <ul class="list list-check animated" data-animate="fadeInUp" data-delay=".4">-->
            <!--                            <li>Fully manage KYC application process.</li>-->
            <!--                            <li>Online Payment Gateway with Offline Payment option.</li>-->
            <!--                            <li>Manage ICO Stage &amp; each stage pricing and bonus option.</li>-->
            <!--                            <li>Analytics reports, Token Sales Data and others.</li>-->
            <!--                            <li>Newsletter with Emailing options.</li>-->
            <!--                            <li>Mobile Friendly and Support all modern browser.</li>-->
            <!--                        </ul>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div><!-- .row -->
            <!--        </div><!-- .block @e -->
            <!--    </div>-->
            <!--</section>-->
            <!-- // -->
            <!--<section class="section section-roadmap bg-white" id="roadmap">-->
            <!--    <div class="container">-->
                    <!-- Section Head @s -->
            <!--        <div class="section-head text-center wide-auto">-->
            <!--            <h6 class="title title-xs title-light animated" data-animate="fadeInUp" data-delay=".1">The roadmap to success</h6>-->
            <!--            <h2 class="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".2">What are our major goals?</h2>-->
            <!--            <p class="animated" data-animate="fadeInUp" data-delay=".3">Our market strategy will prioritise blockchain technology rollout to utilities based on their transformation. View our roadmap to see how exactly we are making that happen. </p>-->
            <!--        </div><!-- .section-head @e -->-->
                    <!-- Block @s -->
            <!--        <div class="nk-block nk-block-roadmap">-->
            <!--            <div class="row justify-content-center">-->
            <!--                <div class="col-xl-10">-->
            <!--                    <div class="roadmap-wrap">-->
            <!--                        <div class="roadmap-line"></div>-->
            <!--                        <div class="roadmap animated" data-animate="fadeInUp" data-delay=".4">-->
            <!--                            <div class="roadmap-year">2019</div>-->
            <!--                        </div>-->
            <!--                        <div class="roadmap roadmap-right roadmap-finished animated" data-animate="fadeInUp" data-delay=".5">-->
            <!--                            <div class="roadmap-step">-->
            <!--                                <div class="roadmap-head">-->
            <!--                                    <span class="roadmap-time">March 2019</span>-->
            <!--                                    <span class="roadmap-title">Concept development</span>-->
            <!--                                </div>-->
            <!--                                <p>Many desktop publishing packages and web page editors now use.</p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="roadmap roadmap-left roadmap-finished animated" data-animate="fadeInUp" data-delay=".6">-->
            <!--                            <div class="roadmap-step">-->
            <!--                                <div class="roadmap-head">-->
            <!--                                    <span class="roadmap-time">Q3 &amp; Q4 2021</span>-->
            <!--                                    <span class="roadmap-title">Website and Whitepaper</span>-->
            <!--                                </div>-->
            <!--                                <ul class="list list-dot">-->
            <!--                                    <li>MVP of wallet prototype released</li>-->
            <!--                                    <li>Pre-Sale ICO Starts</li>-->
            <!--                                    <li>Redesign of website goes live</li>-->
            <!--                                    <li>Version 2 of Whitepaper released</li>-->
            <!--                                    <li>Version 3 of Onepager released</li>-->
            <!--                                </ul>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="roadmap animated" data-animate="fadeInUp" data-delay=".4">-->
            <!--                            <div class="roadmap-year">2024</div>-->
            <!--                        </div>-->
            <!--                        <div class="roadmap roadmap-right animated" data-animate="fadeInUp" data-delay=".5">-->
            <!--                            <div class="roadmap-step">-->
            <!--                                <div class="roadmap-head">-->
            <!--                                    <span class="roadmap-time">Q1 2024</span>-->
            <!--                                    <span class="roadmap-title">Public Token Sale Begins</span>-->
            <!--                                </div>-->
            <!--                                <p>Public ICO launch and crowd-sale starts - 5th Januray &amp; Token distribution will commence - 2nd March.</p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="roadmap roadmap-left animated" data-animate="fadeInUp" data-delay=".6">-->
            <!--                            <div class="roadmap-step">-->
            <!--                                <div class="roadmap-head">-->
            <!--                                    <span class="roadmap-time">Q2 2024</span>-->
            <!--                                    <span class="roadmap-title">Beta App User Testing</span>-->
            <!--                                </div>-->
            <!--                                <p>Release our first apps for beta testing to our members comunity</p>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div><!-- .col -->
            <!--            </div><!-- .row -->
            <!--            <div class="text-center animated" data-animate="fadeInUp" data-delay=".4">-->
            <!--                <a href="#" class="btn btn-grad">View Full Roadmap</a>-->
            <!--            </div>-->
            <!--        </div>-->
                    <!-- Block @e -->
            <!--    </div>-->
            <!--</section>-->
            <!-- // -->
            <section class="section section-team bg-light" id="team">
                <div class="container">
                    <!-- Block @s -->
                    <div class="nk-block nk-block-team-featured team-featured">
                        <div class="row align-items-center">
                            <div class="col-lg-5 mb-4 mb-lg-0">
                                <div class="team-featured-photo tc-light animated" data-animate="fadeInUp" data-delay=".1">
                                    <img src="images/team/large-a.jpg" alt="team">
                                    <h5 class="team-featured-info">David Metthew<span>Chairman </span></h5>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="team-featured-cont">
                                    <h6 class="title title-xs title-light animated" data-animate="fadeInUp" data-delay=".2">behind the idea</h6>
                                    <h2 class="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".3">The Founder</h2>
                                    <!--<p class="animated" data-animate="fadeInUp" data-delay=".4">ICOx Crypto is founded by David Metthew who is young entrepreneur &amp; full stack-developer. He is totam rem aperiam, et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Quam nihil molestiae illum.</p>-->
                                </div>
                            </div>
                        </div><!-- .row -->
                    </div>
                    <!-- Block @e -->
                </div>
            </section>
            <!-- // -->
            <section class="section section-team bg-light pt-0" id="team-members">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto">
                        <h2 class="title title-lg title-dark animated" data-animate="fadeInUp" data-delay=".1">Core Team</h2>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block nk-block-team-list">
                        <div class="row justify-content-center">
                            <div class="col-md-3 col-6">
                                <div class="team animated" data-animate="fadeInUp" data-delay=".2">
                                    <div class="team-photo">
                                        <img src="images/team/ceo.jpg" alt="team">
                                        <a href="#team-popup-1" class="team-show content-popup"></a>
                                        
                                    </div>
                                    <h5 class="team-name title title-sm">Louis Baker</h5>
                                    <span class="team-position">CEO &amp; Lead Blockchain</span>
                                </div>
                                <!-- Start .team-profile  -->
                                <div id="team-popup-1" class="team-popup mfp-hide">
                                    <a title="Close" class="mfp-close">×</a>
                                    <div class="row align-items-start">
                                        <div class="col-md-6">
                                            <div class="team-photo">
                                                <img src="images/team/cto.jpg" alt="team">
                                            </div>
                                        </div><!-- .col  -->
                                        <div class="col-md-6">
                                            <div class="team-popup-info pl-md-3">
                                                <h3 class="team-name title title-lg pt-4">Louis Baker</h3>
                                                <p class="team-position">CEO &amp; Lead Blockchain </p>
                                               
                                               
                                                
                                            </div>
                                        </div><!-- .col  -->
                                    </div><!-- .row  -->
                                </div><!-- .team-profile  -->
                            </div><!-- .col -->
                            <div class="col-md-3 col-6">
                                <div class="team animated" data-animate="fadeInUp" data-delay=".2">
                                    <div class="team-photo">
                                        <img src="images/team/cto.jpg" alt="team">
                                        <a href="#team-popup-2" class="team-show content-popup"></a>
                                        
                                    </div>
                                    <h5 class="team-name title title-sm">Masheani rios</h5>
                                    <span class="team-position">CTO &amp; Software Engineer</span>
                                </div>
                                
                            </div><!-- .col -->
                            <div class="col-md-3 col-6">
                                <div class="team animated" data-animate="fadeInUp" data-delay=".3">
                                    <div class="team-photo">
                                        <img src="images/team/team.jpg" alt="team">
                                        <a href="#team-popup-3" class="team-show content-popup"></a>
                                        
                                    </div>
                                    <h5 class="team-name title title-sm">Mirain Morales</h5>
                                    <span class="team-position">Chief Analyst</span>
                                </div>
                                <!-- Start .team-profile  -->
                                
                            </div><!-- .col -->
                            <div class="col-md-3 col-6">
                                <div class="team animated" data-animate="fadeInUp" data-delay=".4">
                                    <div class="team-photo">
                                        <img src="images/team/team2.jpg" alt="team">
                                        <a href="#team-popup-4" class="team-show content-popup"></a>
                                        
                                    </div>
                                    <h5 class="team-name title title-sm">Joseph Jordan</h5>
                                    <span class="team-position">Chief Finacial Advisor</span>
                                </div>
                                
                            </div><!-- .col -->
                        </div><!-- .row -->
                        <div class="text-center animated" data-animate="fadeInUp" data-delay=".5">
                            <a href="#" class="btn btn-grad">Create account</a>
                        </div>
                    </div>
                    <!-- Block @r -->
                </div>
            </section>
            <!-- // -->
            <section class="section section-faq bg-white" id="faq">
                <div class="container">
                    <!-- Section Head @s -->
                    <div class="section-head text-center wide-auto">
                        <h2 class="title animated" data-animate="fadeInUp" data-delay=".1">FAQs</h2>
                        <p class="animated" data-animate="fadeInUp" data-delay=".2">Below we’ve provided a bit questions about primevest cryptocurrencies, and few others. If you have any other questions, please get in touch via email.</p>
                    </div><!-- .section-head @e -->
                    <!-- Block @s -->
                    <div class="nk-block block-faq">
                        <div class="row">
                            <div class="col-md-4 col-lg-3 mb-4 mb-lg-0">
                                <ul class="nav tab-nav tab-nav-vr tab-nav-bdr mr-lg-3 animated" data-animate="fadeInUp" data-delay=".3">
                                    <li><a class="active" data-toggle="tab" href="#general-questions"><em class="fas fa-caret-right"></em>About Primevest</a></li>
                                    <li><a data-toggle="tab" href="#ico-questions"><em class="fas fa-caret-right"></em>About Deposits/Withdrawal</a></li>
                                    <li><a data-toggle="tab" href="#tokens-sales"><em class="fas fa-caret-right"></em>About Investment</a></li>
                                    <li><a data-toggle="tab" href="#clients-releted"><em class="fas fa-caret-right"></em>General Question</a></li>
                                </ul>
                            </div><!-- .col -->
                            <div class="col-md-8 col-lg-9">
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="general-questions">
                                        <div class="accordion accordion-faq" id="faq-1">
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".1">
                                                <h5 class="accordion-title accordion-title-sm" data-toggle="collapse" data-target="#faq-1-1">What is Primevest? <span class="accordion-icon"></span></h5>
                                                <div id="faq-1-1" class="collapse show" data-parent="#faq-1">
                                                    <div class="accordion-content">
                                                        <p>Primevest is a company that offers its clients a stake in a professionally managed and diversified investment portfolio. This portfolio is assembled by investing in four fields: Forex Markets, Bitcoin Mining, Venture Capital and the Digital Exchange.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".1">
                                                <h5 class="accordion-title accordion-title-sm" data-toggle="collapse" data-target="#faq-1-2">What is Primevest? <span class="accordion-icon"></span></h5>
                                                <div id="faq-1-1" class="collapse show" data-parent="#faq-1">
                                                    <div class="accordion-content">
                                                        <p>It's quite easy and convenient. Follow this link,<a href="/register">register</a>fill in the registration form and then press "Register".</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".2">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-1-3">Is Primevest real? <span class="accordion-icon"></span></h5>
                                                <div id="faq-1-2" class="collapse" data-parent="#faq-1">
                                                    <div class="accordion-content">
                                                        <p>This website is operated by Primevest, registered in England under number  152971. 728 Trens Crescent Beckershire, LA 43961</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".3">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-1-4">What is the profitability of this program? <span class="accordion-icon"></span></h5>
                                                <div id="faq-1-3" class="collapse" data-parent="#faq-1">
                                                    <div class="accordion-content">
                                                        <p>Profitability depends on the investment plan you have chosen. We offer three groups of investment plans with different specialization and investment terms.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".4">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-1-5">How do we make back money? <span class="accordion-icon"></span></h5>
                                                <div id="faq-1-4" class="collapse" data-parent="#faq-1">
                                                    <div class="accordion-content">
                                                        <p>We trade on cryptocurrency exchanges and participate in highly profitable investment transactions. We're  platform with automated elements of trading on cryptocurrency, asset management based on advanced AI risk management, Blockchain technologies and protocol for fast orders delivery.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="ico-questions">
                                        <div class="accordion accordion-faq" id="faq-2">
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".1">
                                                <h5 class="accordion-title accordion-title-sm" data-toggle="collapse" data-target="#faq-2-1">How do i deposit funds?<span class="accordion-icon"></span></h5>
                                                <div id="faq-2-1" class="collapse show" data-parent="#faq-2">
                                                    <div class="accordion-content">
                                                        <div class="accordion-content">
                                                            <p>Fund deposits is easy on Primevest, simply visit your dashboard click on fund/deposit, choose any of the options provided and send equvalent funds to the wallet provided</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".2">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-2-2">How long does it take for deposits to reflect?<span class="accordion-icon"></span></h5>
                                                <div id="faq-2-2" class="collapse" data-parent="#faq-2">
                                                    <div class="accordion-content">
                                                        <p>Depends on the network congestions, deposits are often processed and reflected immediately</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".3">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-2-3">How do i place withdrawals?<span class="accordion-icon"></span></h5>
                                                <div id="faq-2-3" class="collapse" data-parent="#faq-2">
                                                    <div class="accordion-content">
                                                        <p>Login to your account using your username and password and check the Withdraw section. Click on withdrawal and amount you would like to withdraw.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".4">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-2-4">How long does it take for withdrawal to work?<span class="accordion-icon"></span></h5>
                                                <div id="faq-2-4" class="collapse" data-parent="#faq-2">
                                                    <div class="accordion-content">
                                                        <p>Our withdrawals are instant except on rare cases when its under review by admins.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tokens-sales">
                                        <div class="accordion accordion-faq" id="faq-3">
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".1">
                                                <h5 class="accordion-title accordion-title-sm" data-toggle="collapse" data-target="#faq-3-1">How do I invest in Primevest?<span class="accordion-icon"></span></h5>
                                                <div id="faq-3-1" class="collapse show" data-parent="#faq-3">
                                                    <div class="accordion-content">
                                                        <p>To start a new investment cycle, log in go to your dashboard by clicking the “Dashboard” link in the top menu of the site. In the dashboard find Menu and click on investments. You will be redirected to investment page page, choose any of the investment plans that suites your needs</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".2">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-3-2">How do i get my profits?<span class="accordion-icon"></span></h5>
                                                <div id="faq-3-2" class="collapse" data-parent="#faq-3">
                                                    <div class="accordion-content">
                                                        <p>Depending on each plan. Interest on your investments are acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and credited to your interest balance at the end of each day.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".3">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-3-3">Can i make multiple investments?<span class="accordion-icon"></span></h5>
                                                <div id="faq-3-3" class="collapse" data-parent="#faq-3">
                                                    <div class="accordion-content">
                                                        <p>yes, mutiple investments are allowed in Primevest, all investments will be treated as independent transactions</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".4">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-3-4">What do i do if my interest is not adding?<span class="accordion-icon"></span></h5>
                                                <div id="faq-3-4" class="collapse" data-parent="#faq-3">
                                                    <div class="accordion-content">
                                                        <p>once your account is not automatically adding interest, kindly communicate to our customer service the livechat option</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="clients-releted">
                                        <div class="accordion accordion-faq" id="faq-4">
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".1">
                                                <h5 class="accordion-title accordion-title-sm" data-toggle="collapse" data-target="#faq-4-1">How do i change my email and password?<span class="accordion-icon"></span></h5>
                                                <div id="faq-4-1" class="collapse show" data-parent="#faq-4">
                                                    <div class="accordion-content">
                                                        <p>Log into your  account and click on the " Profile setting. You can change your e-mail address and password there.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".2">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-4-2">What is i forgot or lost my password?<span class="accordion-icon"></span></h5>
                                                <div id="faq-4-2" class="collapse" data-parent="#faq-4">
                                                    <div class="accordion-content">
                                                        <p>Click forgot password link, type your username or e-mail and you'll receive your account information.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".3">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-4-3">Are additional fees or commission fee when investing?<span class="accordion-icon"></span></h5>
                                                <div id="faq-4-3" class="collapse" data-parent="#faq-4">
                                                    <div class="accordion-content">
                                                        <p>The program does not provide any commission fees, additional and / or hidden charges. You pay only the fees of electronic payment systems when making investments and withdrawing funds.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item animated" data-animate="fadeInUp" data-delay=".4">
                                                <h5 class="accordion-title accordion-title-sm collapsed" data-toggle="collapse" data-target="#faq-4-4">Can I join Primevest affilate program without active investment?<span class="accordion-icon"></span></h5>
                                                <div id="faq-4-4" class="collapse" data-parent="#faq-4">
                                                    <div class="accordion-content">
                                                        <p>Yes, you can. Our affiliate program is available for all registered users</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- .col -->
                        </div><!-- .row -->
                    </div><!-- .block @e -->
                </div>
            </section>
            <!-- // -->
            <section class="section section-m section-partners bg-light" id="partners">
                <div class="container">
                    <!-- Block @s -->
                    <div class="nk-block block-partners">
                        <h6 class="title title-xs tc-primary text-center animated" data-animate="fadeInUp" data-delay=".1">Our Partners</h6>
                        <ul class="partner-list flex-lg-nowrap">
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".2"><img src="images/partners/a.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".3"><img src="images/partners/b.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".4"><img src="images/partners/c.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".5"><img src="images/partners/d.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".6"><img src="images/partners/e.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".7"><img src="images/partners/f.png" alt="partner"></li>
                            <li class="partner-logo animated" data-animate="fadeInUp" data-delay=".8"><img src="images/partners/g.png" alt="partner"></li>
                        </ul>
                    </div>
                    <!-- Block @e -->
                </div>
            </section>
            </main>




@endsection