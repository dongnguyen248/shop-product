<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Product Table</h3>

            <div class="card-tools">
              <button class="btn btn-success" @click="newModal()">
                Add new
                <i class="fa fa-plus fa-fw"></i>
              </button>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body table-responsive p-0">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>ProductCode</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Uom</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>PromotionPrice</th>
                  <th>Photo</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in getAllproducts" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name | upFirst }}</td>
                  <td>{{ product.description }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.category }}</td>
                  <td>{{ product.price | myNumber }}</td>
                  <td>
                    <img
                      v-if="product.photo != '' && product.photo != null"
                      class="media-object"
                      v-bind:src="'images/product/' + product.photo"
                      alt="Photo"
                    />
                  </td>
                  <td>
                    <a href="#">
                      <i class="fa fa-edit text-blue" @click.prevent="edit"></i>
                    </a>
                    /
                    <a href="#">
                      <i
                        class="fa fa-trash text-red"
                        @click="deleteProduct(product.id)"
                      ></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <div>
          <paginate
            :page-count="totalPage"
            :click-handler="getProductPage"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            :prev-link-class="'page-link'"
            :next-link-class="'page-link'"
          ></paginate>
        </div>
        <!-- /.card -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "List",
  ...mapGetters({
    notifications: "all",
  }),
  methods: {
    newModal() {
      this.isEdit = false;
      this.form.reset();
      this.form.clear();
      $("#productModal").modal("show");
    },
    edit: function () {
      this.$store.dispatch("editProduct", this.product);
      this.$router.push({ name: "products.index" });
    },
  },
  mounted() {
    this.$store.dispatch("allProductfromDB");
  },
  computed: {
    getAllproducts() {
      return this.$store.getters.getproducts;
    },
  },
};
</script>
