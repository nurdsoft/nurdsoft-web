import jobDataJSON from "./job_data.json";
import path from "path"

exports.createPages = async function ({ actions }: any) {

  {Object.keys(jobDataJSON).map((dataKey: string) => {
    const slug = dataKey
    const typedJobDataJSON = jobDataJSON as Record<
      string,
      Record<string, string | string[]>
    >;
    actions.createPage({
      path: `/career/${slug}`,
      component: path.resolve(`./src/templates/jobDescription.tsx`),
      context: { slug: slug, data: typedJobDataJSON[`${dataKey}`] },
    })
  })}
}