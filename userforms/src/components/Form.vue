<template>
  <b-container class="text-left">
    <b-row>
      <b-col md="12">
        <b-form >
          <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
          >
            <b-form-input
                id="input-1"
                v-model="userData.email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="userData.password"
                type="password"
                placeholder="Enter password"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Your Age:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model.lazy="userData.age"
                placeholder="Enter age"
                required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Your Message:" label-for="input-4">
            <b-form-textarea
                id="textarea"
                v-model="userData.message"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
            ></b-form-textarea>
          </b-form-group>

         <b-form-group id="input-group-5" label="Priority:" label-for="input-5">
            <b-form-select
                id="input-5"
                v-model="userData.priority"
                :options="userData.priorities"
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" >
            <b-form-checkbox-group
                id="checkboxes-4"
            >
              <b-form-checkbox value="sendMail" v-model="userData.sendMail">Send mail</b-form-checkbox>
              <b-form-checkbox value="sendInfomail" v-model="userData.sendMail">Send Infomail</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group label="Individual radios" >
            <b-form-radio v-model="userData.gender"  name="some-radios" value="Femail">Female</b-form-radio>
            <b-form-radio v-model="userData.gender"  name="some-radios" value="Male">Male</b-form-radio>
          </b-form-group>

          <b-button type="submit" variant="primary" @click.prevent="submitted">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result" v-if="isSubmitted">
          <pre class="m-0">{{ userData }}</pre>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {

    return {
      userData: {
        email: '',
        password: '',
        age: 27,
        message : "A new Text Message",
        sendMail : [],
        gender : "Male",
        priority : "high",
        priorities : ['high','medium','low'],
      },
      isSubmitted : false
    }
  },
  methods : {
    submitted() {
      this.isSubmitted = true;
    }
  }
}
</script>