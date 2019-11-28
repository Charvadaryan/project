import React from 'react'

function BloggerCard({ bloggers }) {
	// console.log(bloggers);

	return (
		<div>
			{bloggers.map(blogger => {
				return (
					<div className="card" >
						<img src="..." className="card-img-top" alt="." />
						<div className="card-body">
							<h5 className="card-title">{blogger.lastname}</h5>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default BloggerCard
