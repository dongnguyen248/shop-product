 
 <template>
  <div>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
      </ul>

      <!-- SEARCH FORM -->
      <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input
            class="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
    </nav>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/admin" class="brand-link">
        <img
          src="/images/logo.png"
          alt="Shop Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <!-- <span class="brand-text font-weight-light">LaraVue</span> -->
      </router-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/images/profile.png"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block"></a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <router-link to="/admin-dashboard" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt text-blue"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item has-treeview">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-cog text-green"></i>
                <p>
                  Management
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview" style="padding-left: 25px">
                <li class="nav-item">
                  <router-link to="/admin-users" class="nav-link">
                    <i class="fas fa-users nav-icon text-yellow"></i>
                    <p>Users</p>
                  </router-link>
                </li>

                <li class="nav-item">
                  <router-link to="/admin-product" class="nav-link">
                    <i class="nav-icon fa fa-cubes text-teal"></i>
                    <p>Product</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin-category" class="nav-link">
                    <i class="nav-icon fas fa-anchor text-pink"></i>
                    <p>Category</p>
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link to="/admin-profile" class="nav-link">
                <i class="nav-icon fas fa-user-circle text-orange"></i>
                <p>Profile</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin-developer" class="nav-link">
                <i class="fas fa-cogs nav-icon"></i>
                <p>Developer</p>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="nav-icon fas fa-power-off text-red"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>

        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>
<script>
export default {};
</script>
  
