import { useTestsStore } from "@/store";

// Shared question-navigation/answering logic used by the test-taking page
// (pages/test/[test_id]/index.vue) and its extracted child components
// (components/Page/Test/*). Kept as a composable instead of duplicated in
// every child since these functions only touch the Pinia tests store / DOM
// and don't depend on any page-local state.
export const useTestQuestion = () => {
  const useTests: any = useTestsStore();

  function generateAlphabet(index: number) {
    return String.fromCharCode(65 + index);
  }

  function changeSlide() {
    setTimeout(() => {
      useTests.store.slideStep = +(document.querySelector(".swiper-slide-active")?.id as any);
    }, 200);
  }

  function nextSlide(type?: string) {
    useTests.store.isChecked = false;
    if (type == "student") {
      if (Object.keys(useTests.test)?.length == useTests.store.slideStep) {
        for (let i = 0; i < Object.keys(useTests.test)?.length; i++) {
          if (!useTests.store.checked_answers[i + 1]?.length) {
            useTests.store.slideStep = +i + 1;
            return;
          }
        }
      } else {
        useTests.store.slideStep++;
      }
    } else {
      if (Object.keys(useTests.test)?.length == useTests.store.slideStep) {
        if (!useTests.test[+useTests.store.slideStep]) {
          useTests.test[+useTests.store.slideStep] = {
            question: null,
            variants: [null],
            type: "variant",
            true_answer: [0],
          };
          setTimeout(() => {
            useTests.store.slideStep = +useTests.store.slideStep + 1;
          }, 100);
        } else {
          useTests.store.slideStep = +useTests.store.slideStep + 1;
        }
      } else {
        if (useTests.store.true_answers?.length != Object.keys(useTests.test)?.length) {
          return;
        }
        useTests.store.slideStep = +useTests.store.slideStep + 1;
      }
    }
  }

  function selectedAnswer(id: number, variant: any, type: string, step: number) {
    if (isNaN(useTests.store.checked_answers[useTests.store.slideStep])) {
      if (type == "variant" && step == 1) {
        useTests.store.true_answers[useTests.store.slideStep] = [[variant]];
      } else if (step != 1) {
        useTests.store.true_answers[useTests.store.slideStep] = useTests.store.true_answers[
          useTests.store.slideStep
        ] || [{}];
        for (let i in useTests.store.true_answers[useTests.store.slideStep][0]) {
          if (useTests.store.true_answers[useTests.store.slideStep][0][+i - 1] == variant) {
            delete useTests.store.true_answers[useTests.store.slideStep][0][+i - 1];
          }
        }
        useTests.store.true_answers[useTests.store.slideStep][0][id - 1] = variant;
        for (let i = 0; i < 3; i++) {
          const element = document
            .getElementById(useTests.store.slideStep)
            ?.querySelector(`[data-id="${String.fromCharCode(65 + i)}"]`);
          if (element && useTests.store.true_answers[useTests.store.slideStep][0][i])
            element.innerHTML = `<span>${i + 1}</span> <span class="questionInfo">${useTests.store.true_answers[useTests.store.slideStep][0][i]
              }</span>`;
          else element!.innerHTML = `<span>${i + 1}</span> ...`;
        }
      }
    }
  }

  function setFillAnswer(step: number, t_index: number, val: any) {
    if (!Array.isArray(useTests.store.true_answers[step])) {
      useTests.store.true_answers[step] = [];
    }
    useTests.store.true_answers[step][t_index] = val;
  }

  function getSelectedItem(variant: any) {
    if (!useTests.store.true_answers[useTests.store.slideStep]) return;
    for (let i in useTests.store.true_answers[useTests.store.slideStep][0]) {
      if (
        useTests.store.true_answers[useTests.store.slideStep] &&
        useTests.store.true_answers[useTests.store.slideStep][0][i] == variant
      ) {
        return +i + 1;
      }
    }
  }

  return {
    generateAlphabet,
    changeSlide,
    nextSlide,
    selectedAnswer,
    setFillAnswer,
    getSelectedItem,
  };
};
