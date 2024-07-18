import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReadMe = () => {
	const docs = `
        ### Stats
        [![Froilan's WakaTime stats](https://github-readme-stats.vercel.app/api/wakatime?username=froilanimnida)]
        [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=froilanimnida&layout=donut)]
        [![GitHub Stats](https://github-readme-stats.vercel.app/api?username=froilanimnida&show_icons=true&theme=transparent)]
        [![Frontend Roadmap](https://roadmap.sh/card/wide/667cd2ae2028c2d81892c220?variant=light&roadmaps=frontend)]
    `;
	return (
		<div>
			<ReactMarkdown>
				### Stats [![Froilan&apos;s WakaTime
				stats](https://github-readme-stats.vercel.app/api/wakatime?username=froilanimnida)]
				[![Top
				Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=froilanimnida&layout=donut)]
				[![GitHub
				Stats](https://github-readme-stats.vercel.app/api?username=froilanimnida&show_icons=true&theme=transparent)]
				[![Frontend
				Roadmap](https://roadmap.sh/card/wide/667cd2ae2028c2d81892c220?variant=light&roadmaps=frontend)]
			</ReactMarkdown>
		</div>
	);
};

export default ReadMe;
