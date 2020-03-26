import * as React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import Responsive from "react-responsive"
import Author from "../components/me/author"
import FabButton from "../components/shared/FabButton"

import THEME from "../theme"

const Mobile = props => <Responsive {...props} maxWidth={767} />
const Default = props => <Responsive {...props} minWidth={768} />

const ContentArea = ({ data }: any) => (
  <Card style={{ padding: 50 }}>
    <h1
      style={{
        marginBottom: 30,
        marginTop: 0,
        marginLeft: 30,
        marginRight: 30,
        textAlign: "center",
      }}
    >
      About {data.site.siteMetadata.title}
    </h1>
    <Author author={data.site.siteMetadata.author} />
    {/* {
      // tslint:disable:react-no-dangerous-html
      <div dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.about }} />
      // tslint:enable:react-no-dangerous-html
    } */}
    <div>
      <p>It’s real mango gelato from Florence, Italy, in case you were wondering what the face was about.</p>
      <p>Hi! I’m Kaylee.</p>
      <p>I’m the mother of three crazy and beautiful young children, the wife of an amazing guy who also happens to be my favorite person on the planet and a fellow food lover (although not a cook…at all), and a devoted member of the Church of Jesus Christ of Latter Day Saints (Ask me about it sometime!). I grew up in Southern California, went to college and lived for several in Northern Utah, and recently moved to Central Indiana. So far I’ve grown to love the food (and the people) in all three places. I’ve traveled a lot in my life, thanks to adventurous parents and an ever-increasingly adventurous husband, and food is a huge part of our travels. Food brings people together! Making food for people is a way to show love and bring enjoyment those around us.</p>
      <p>I’ve been cooking since I was a kid. My first memories always include my dad, my older sister and I in the kitchen on Sunday nights trying to curb our sweet tooth with whatever we had in the pantry, adding ingredients into boxed baked goods or making things from scratch, digging through old, unused recipe books from the very top shelf of our pantry. My love for cooking progressed from there. I would come home from middle school and make my brother and I cheesy scrambled eggs that I’d slaved over day after day, perfecting. Then in high school I would come home and make myself and my (very lucky) little brother lunch (because who eats lunch at school anyway?) and since I was health conscious even at that age, I had figured out how to make a really flavorful chicken stir fry with a citrus soy sauce and sesame seeds. We only had frozen stir fry veggies and canned chicken but I accepted the challenge. Like, what a nerd, right?!</p>
      <p>Once I was married and had moved to a climate with harsh winters, I would spend so many evenings during those cold months bundled up with slippers and pajamas creating away in the kitchen, baking treats to take to neighbors, making dinner for friend game nights and dinner parties, or learning how to feed a crowd with family gatherings and birthdays. Then I had kids. Figuring out how to make healthy foods that still tasted great so my kids would learn to love them became my new mission in life. (All you mommas know that challenge!)</p>
      <p>To say the least, I’m passionate about cooking. (And eating, but that’s a different story.)</p>
      <p>I’m not a “stick to the recipe” kind of person, everything is always evolving and that’s the beauty of food as an art form! I believe life should be about balance. I don’t take myself too seriously. I believe we should be healthy, but also enjoy our lives and our taste buds! I love exercise and salads just as much as I love Netflix and fried chicken. Throughout my life I’ve tried to live a more intuitive way, keeping the ratio of healthy versus indulgent somewhere around 80/20. It’s the sweet spot for me, I think. So that’s what my recipes reflect.</p></div>
  </Card>
)

const HeaderArea = () => {
  const goBack = () => window.history.back()

  return <FabButton onClickHandler={goBack} />
}

export default ({ data }: any) => (
  <>
    <Default>
      <div
        style={{
          backgroundColor: THEME.aboutPage.layout.backgroundColor,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: THEME.aboutPage.layout.cardMaxWidth,
            margin: "0 auto",
            paddingTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 40,
          }}
        >
          <HeaderArea />
          <ContentArea data={data} />
        </div>
      </div>
    </Default>
    <Mobile>
      <HeaderArea />
      <ContentArea data={data} />
    </Mobile>
  </>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        about
        author {
          name
          image
          biography
        }
      }
    }
  }
`
