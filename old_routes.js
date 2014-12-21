<div class="container">

  <!-- HEADER -->
  <nav class="navbar navbar-inverse">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Sandbox</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="/explore">Explore</a></li>
    </ul>
  </nav>

  <!-- JADE DYNAMIC CONTENT -->
  <div class="jumbotron text-center">
    <h1>Welcome to Sandbox</h1>
    <br>
    <form action="/search" method="get">
      <input type="text" name="q" alt="Search" value="" maxlength="256" size="120" />
      <input type="submit" name="submit" value="Search" />
    </form>
  </div>
