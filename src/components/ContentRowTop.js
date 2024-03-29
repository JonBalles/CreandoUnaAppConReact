import { GenresInDB } from "./GenresInDB.js"
import { LastMovieInDb } from "./LastMovieInDB.js"

export const ContentRowTop = () => {
   
	return (
        <>
        	<div class="container-fluid">
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					
					<div class="row">

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-primary shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Movies in Data Base</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">21</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-film fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Total awards</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">79</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-award fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Actors quantity
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">49</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					
	
					
					<div class="row">
						<LastMovieInDb />
						
						<GenresInDB />

						
						
					</div>
				</div>
        </>
    )
}