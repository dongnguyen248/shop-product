<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Product Type Table</h3>

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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Creaed At</th>
                  <th>Updated At</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="productType in productTypes" :key="productType.id">
                  <td>{{ productType.id }}</td>
                  <td>{{ productType.name | upFirst }}</td>
                  <td>{{ productType.created_at }}</td>
                  <td>{{ productType.updated_at }}</td>
                  <td>
                    <a href="#">
                      <i
                        class="fa fa-edit text-blue"
                        @click="editModal(productType)"
                      ></i>
                    </a>
                    /
                    <a href="#">
                      <i
                        class="fa fa-trash text-red"
                        @click="deleteProductType(productType.id)"
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
            :click-handler="getProductTypePage"
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

    <div
      class="modal fade"
      id="productTypeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productTypeModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {{ isEdit ? "Edit Product Type" : "Add new Product Type" }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form
            @submit.prevent="isEdit ? updateProductType() : createProductType()"
          >
            <div class="modal-body">
              <div class="form-group">
                <input
                  v-model="form.name"
                  type="text"
                  name="name"
                  class="form-control"
                  :class="{
                    'is-invalid': form.errors.has('name'),
                  }"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary">
                {{ isEdit ? "Update" : "Create" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>