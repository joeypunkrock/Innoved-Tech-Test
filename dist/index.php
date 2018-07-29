
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="A tech test for InnovEd">
    <meta name="author" content="Joseph Thomas joey_t_93@hotmail.co.uk">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rangeslider.js/2.3.0/rangeslider.min.css">
    <link rel="stylesheet" href="/css/all.css" />

  </head>

  <body>
            
    <!-- sidebar -->
    <div id="sidebarSlidout">
      <?php include_once('inc/sidebar.html'); ?>
    </div>
    <!-- /sidebar -->

    <div id="main">
            
      <?php include_once('inc/navbar.html'); ?>

      <div class="container-fluid">
        <div class="row">

          <!-- inject sidebar here for larger devices -->
          <div id="sidebarStatic" class="col-lg-3 p-0"></div>

            <!-- main body -->
            <main role="main" class="col-lg-9 ml-sm-auto px-4">
              <div class="pt-3 pb-2 mb-3 main-body">
                
                <div class="d-flex flex-row-reverse pt-1 pb-1 mb-3">
                  <div class="dropdown show">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i class="fas fa-users mr-2" aria-hidden="true"></i> Assessment roles
                    </a>
                  
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center border-bottom">
                  <?php include_once('inc/assessment-header.html'); ?>

                  <!-- assessment sections loaded in here via ajax $.get() request -->
                  <div id="assessmentSection" class="mt-4"></div>
                </div>
                      
              </div>
            </main>
            <!-- /main body -->

        </div>      
      </div>

    </div>

  <!-- bundled css & js -->
  <script src="bundle.js"></script>
  </body>
</html>
