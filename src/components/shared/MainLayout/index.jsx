export default function MainLayout({ children }) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      {children}
    </div>
  )
}
