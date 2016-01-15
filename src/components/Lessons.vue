<template lang="jade">
include ./mixins/sidebar.jade
include ./mixins/forms.jade
.row
  +sidebar //- .col-sm-2
  .col-sm-10
    button(@click="addLesson()").btn.btn-default Create Lesson
  modal(:show.sync="showModal").container
    div(slot="modal-header").modal-header
      h4.modal-title Create Lesson
    div(slot="modal-body").modal-body
      +createLesson
    div(slot="modal-footer").modal-footer
      button(type='button' @click="exitLesson()").btn.btn-default Close
      button(type='submit' @click="saveLesson()").btn.btn-primary Save
  div.lessons
    ul
      li(v-for="lesson in lessons") {{ lesson.lesson_name }}
</template>

<script>
  import auth from '../auth'
  import { modal as Modal } from 'vue-strap'
  import conf from '../config'

  const LESSON_URL = conf.API_URL + '/lesson'

  export default {
    name: "Lesson",
    props: [],
    data() {
      return {
        lessons: [],
        user: auth.user,
        showModal: false,
        lesson: {
          lessonNumber: '',
          lessonName: '',
          lessonUnit: '',
          lessonSubject: '',
          materialsRequired: '',
          lessonDescription: ''
        }
      }
    },
    methods: {
      addLesson() {
        this.showModal = true
      },
      exitLesson() {
        this.showModal = false
      },
      clearLesson() {
        this.lesson.lessonNumber = ''
        this.lesson.lessonName = ''
        this.lesson.lessonUnit = ''
        this.lesson.lessonSubject = ''
        this.lesson.materialsRequired = ''
        this.lesson.lessonDescription = ''
      },
      saveLesson() {
        var lesson = {
          lessonNumber: this.lesson.lessonNumber,
          lessonName: this.lesson.lessonName,
          lessonUnit: this.lesson.lessonUnit,
          lessonSubject: this.lesson.lessonSubject,
          materialsRequired: this.lesson.materialsRequired,
          lessonDescription: this.lesson.lessonDescription
        }
        console.log(lesson)
        this.$http.post(LESSON_URL, lesson, (data) => {
            console.log('Data' + lesson)
            this.exitLesson()
            this.clearLesson()
            this.getLessons()
          })
      },
      getLessons() {
        this.$http.get(LESSON_URL, (data) => {
          data.forEach((elem) => {
            this.lessons.push(elem)
          });
        })
      }
    },
    components: {
      Modal
    }
  }
</script>