import jobDataJSON from "./job_data.json";
import path from "path"

exports.createPages = async function ({ actions }: any) {

  {Object.keys(jobDataJSON).map((dataKey: string) => {
    const slug = dataKey
    actions.createPage({
      path: `/career/${slug}`,
      component: path.resolve(`./src/templates/jobDescription.tsx`),
      context: { slug: slug },
    })
  })}
}