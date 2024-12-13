import './styles.css'

const skills = [
  {
    skill: 'HTML+CSS',
    level: 'advanced',
    color: '#2662EA'
  },
  {
    skill: 'JavaScript',
    level: 'advanced',
    color: '#EFD81D'
  },
  {
    skill: 'Web Design',
    level: 'advanced',
    color: '#C3DCAF'
  },
  {
    skill: 'Git and GitHub',
    level: 'intermediate',
    color: '#E84F33'
  },
  {
    skill: 'React',
    level: 'advanced',
    color: '#60DAFB'
  },
  {
    skill: 'Svelte',
    level: 'beginner',
    color: '#FF3B00'
  }
]

const levelIcon = new Map(
  Object.entries({
    beginner: '👶',
    intermediate: '👍',
    advanced: '💪'
  })
)

const Avatar = () => <img className="avatar" src="jonas.jpeg" />

const Intro = () => (
  <div>
    <h1>Jonas Schmedtmann</h1>
    <p>
      Full-stack web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just enjoy the Portuguese sun at the beach.
    </p>
  </div>
)

const Skill = ({ skillStyle: { skill, color: backgroundColor, level } }) => (
  <div className="skill" style={{ backgroundColor }}>
    <span>{skill}</span>
    <span>{levelIcon.get(level)}</span>
  </div>
)

const SkillList = () => (
  <div className="skill-list">
    {skills.map(item => (
      <Skill skillStyle={item} key={item.skill} />
    ))}
  </div>
)

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}
