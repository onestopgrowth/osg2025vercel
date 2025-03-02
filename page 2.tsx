import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Settings, User, CreditCard, Keyboard, Users, UserPlus, Github, LifeBuoy, Cloud, LogOut } from "lucide-react"

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#0f172a] rounded-full" />
          <span className="text-lg font-medium">shadcn/ui</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Beautifully designed components</h1>
        <h2 className="text-4xl font-bold text-[#0f172a]">built with RadixUI and Tailwind CSS</h2>
      </div>

      <div className="grid md:grid-cols-[1fr,300px] gap-8">
        <div className="space-y-8">
          {/* Layout Options */}
          <Card>
            <CardContent className="pt-6">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="default" />
                  <Label htmlFor="default">Default</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="comfortable" />
                  <Label htmlFor="comfortable">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="compact" />
                  <Label htmlFor="compact">Compact</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Dimensions */}
          <Card>
            <CardHeader>
              <CardTitle>Dimensions</CardTitle>
              <CardDescription>Set the dimensions for the layer.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-width">Max. width</Label>
                <Input id="max-width" defaultValue="300px" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-height">Max. height</Label>
                <Input id="max-height" defaultValue="none" />
              </div>
            </CardContent>
          </Card>

          {/* User Profile */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">@nextjs</div>
                  <div className="text-sm text-gray-500">The React Framework - created and maintained by @vercel</div>
                  <div className="text-sm text-gray-500 mt-1">Joined December 2021</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Navigation */}
        <Card>
          <CardHeader>
            <CardTitle>My Account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <User className="w-4 h-4" />
              <span>Profile Item</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <CreditCard className="w-4 h-4" />
              <span>Billing</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Keyboard className="w-4 h-4" />
              <span>Keyboard shortcuts</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Users className="w-4 h-4" />
              <span>Team</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <UserPlus className="w-4 h-4" />
              <span>Invite users</span>
              <span className="ml-auto">→</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Github className="w-4 h-4" />
              <span>Github</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <LifeBuoy className="w-4 h-4" />
              <span>Support</span>
              <span className="ml-auto">→</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Cloud className="w-4 h-4" />
              <span>API</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <LogOut className="w-4 h-4" />
              <span>Log out</span>
              <span className="ml-auto text-gray-500">⌘B</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane mode</Label>
          </div>
          <Button>Continue</Button>
        </div>
        <div className="flex items-center gap-4">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <div className="bg-[#0f172a] text-white px-3 py-1 rounded-md">Beta</div>
            <div>v1.0.0</div>
          </div>
        </div>
      </div>
    </div>
  )
}

