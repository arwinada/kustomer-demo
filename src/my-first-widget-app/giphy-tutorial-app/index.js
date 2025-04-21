const tutorialApp = "giphy_tutorial_par-ada-delilah";
const siteURL = "http://arwinada.github.io/kustomerpoc";

export default {
  "app": tutorialApp,
  "version": "0.0.1",
  "title": "GIPHY App Tutorial",
  "kviews": [{
     "name": tutorialApp + ".randomgiphy",
     "template": `<div>
        <DynamicCard 
          src="${siteURL}" 
          fillToWidth 
          noPadding 
          context={context.conversation}
        />
      </div>
      `,
     "context": "smartbar-card",
     "resource": "conversation",
     "meta": {
       "displayName": "Get a Random GIF",
       "icon": "image"
     }
  }]
};
