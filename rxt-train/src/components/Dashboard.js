import React from "react"
import { Card, Button, Alert } from "react-bootstrap"

export default function Dashboard() {
  return (
    <>
      <Card>
        <Card.Body>
          <h2>Welcome to your dashboard</h2>
          <h2 className="text-center mb-4">Profile</h2>

        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        <Button>
          Log Out
        </Button>
      </div>
    </>
  )
}
