import React from 'react'

const HeaderComponent = () => {
return (
	<div>
		<header>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
			<h1 class="brand text-light">Posts Controll</h1>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="/posts">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/all-posts">View All Posts</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
		</header>
	</div>
	)
}

export default HeaderComponent