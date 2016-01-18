<template lang="jade">
include ./mixins/sidebar.jade
include ./mixins/forms.jade
include ./mixins/lessons.jade
.row()
  +sidebar //- .col-sm-2
  .col-sm-10
    div(:lessons="getLessons()").lessons
      h4 Lessons
      accordion(:one-at-atime="checked")
          panel(header="Math" v-ref:lesson)
            ul
              //li(v-for="lesson in lessons.mathLessons" @click="$parent.showLessonModal()")
              //  +lessonInfoModal()
              li(v-for="lesson in lessons.mathLessons") {{ lesson.lesson_name }}
          panel(header="Science")
            ul
              li(v-for="lesson in lessons.scienceLessons") {{ lesson.lesson_name }}
          panel(header="Art")
            ul
              li(v-for="lesson in lessons.artLessons") {{ lesson.lesson_name }}
          panel(header="Social Studies")
            ul
              li(v-for="lesson in lessons.ssLessons") {{ lesson.lesson_name }}
    div
      button(@click="addLesson()").btn.btn-default Create Lesson
    +createLessonModal

</template>

<script>
  import auth from '../auth'
  import { modal as Modal } from 'vue-strap'
  import { accordion as Accordion } from 'vue-strap'
  import { panel as Panel } from 'vue-strap'
  import conf from '../config'

  const LESSON_URL = conf.API_URL + '/api/lesson'

  export default {
    name: "Lesson",
    props: [],
    data() {
      return {
        lessons: {
          mathLessons: [],
          scienceLessons: [],
          artLessons: [],
          ssLessons: []
        },
        user: auth.user,
        showModal: false,
        showLessonModal: false,
        checked: false,
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
      showLessonModal() {
        this.showLessonModal = true
      },
      exitLessonModal() {
        this.showLessonModal = false
      },
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
            console.log('Data received')
            this.exitLesson()
            this.clearLesson()
            this.getLessons()
          })
      },
      getLessons() {
        this.$http.get(LESSON_URL, (data) => {
          console.log(data);
          data.forEach((elem) => {
            var subject = elem.lesson_subject
            console.log(subject)
            if(subject == "math" || subject ==  "Math") {
              this.lessons.mathLessons.push(elem)
            } else if(subject == "science" || subject == "Science") {
              this.lessons.scienceLessons.push(elem)
            } else if(subject == "art" || subject == "Art") {
              this.lessons.artLessons.push(elem)
            } else if(subject == "social studies" || subject == "Social Studies") {
              this.lessons.ssLessons.push(elem)
            }
          });
        })
      }
    },
    components: {
      Modal,
      Accordion,
      Panel
    }
  }
</script>

<style>
ul {
  list-style: none;
}