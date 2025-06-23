"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Heart, BookOpen, Globe } from "lucide-react";
import Image from "next/image";

const stats = [
	{
		icon: Users,
		label: "Students Worldwide",
		value: "500K+",
		color: "text-blue-600",
	},
	{
		icon: BookOpen,
		label: "Courses Available",
		value: "2,500+",
		color: "text-green-600",
	},
	{
		icon: Award,
		label: "Expert Instructors",
		value: "150+",
		color: "text-purple-600",
	},
	{
		icon: Globe,
		label: "Countries Reached",
		value: "120+",
		color: "text-orange-600",
	},
];

const team = [
	{
		name: "Sarah Johnson",
		role: "CEO & Founder",
		bio: "Former VP of Education at Google with 15+ years in EdTech",
		image:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
		expertise: ["Leadership", "EdTech Strategy", "Product Vision"],
	},
	{
		name: "Michael Chen",
		role: "CTO",
		bio: "Ex-Netflix engineer passionate about scalable learning platforms",
		image:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
		expertise: ["Full Stack Development", "System Architecture", "AI/ML"],
	},
	{
		name: "Emily Rodriguez",
		role: "Head of Content",
		bio: "Award-winning educator and curriculum designer",
		image:
			"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
		expertise: ["Curriculum Design", "Learning Science", "Content Strategy"],
	},
];

const values = [
	{
		icon: Target,
		title: "Excellence",
		description:
			"We strive for the highest quality in everything we do, from course content to user experience.",
	},
	{
		icon: Heart,
		title: "Accessibility",
		description:
			"Quality education should be accessible to everyone, regardless of background or location.",
	},
	{
		icon: Users,
		title: "Community",
		description:
			"Learning is better together. We foster a supportive community of learners and educators.",
	},
	{
		icon: Award,
		title: "Innovation",
		description:
			"We continuously innovate to make learning more effective and engaging.",
	},
];

export default function AboutPage() {
	return (
		<>
			<main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
				{/* Hero Section */}
				<section className="pt-32 pb-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
								About{" "}
								<span className="text-gradient">EduFlow</span>
							</h1>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
								We&apos;re on a mission to democratize education and make
								high-quality learning accessible to everyone, everywhere. Join
								millions of learners who are transforming their careers with
								EduFlow.
							</p>
						</motion.div>

						{/* Stats */}
						<motion.div
							className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{stats.map((stat, index) => {
								const Icon = stat.icon;
								return (
									<div key={index} className="text-center">
										<div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
											<Icon className={`h-8 w-8 ${stat.color}`} />
										</div>
										<div className="text-3xl font-bold text-gray-900 mb-2">
											{stat.value}
										</div>
										<div className="text-gray-600">{stat.label}</div>
									</div>
								);
							})}
						</motion.div>
					</div>
				</section>

				{/* Story Section */}
				<section className="py-20 bg-white/50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
							>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Our Story
								</h2>
								<div className="space-y-4 text-gray-600 leading-relaxed">
									<p>
										EduFlow was born from a simple belief: that everyone
										deserves access to world-class education. Founded in 2020 by
										a team of educators and technologists, we started with a
										vision to bridge the gap between traditional education and
										the rapidly evolving demands of the modern world.
									</p>
									<p>
										What began as a small platform with just 10 courses has
										grown into a global learning ecosystem serving over 500,000
										students worldwide. We&apos;ve partnered with industry experts,
										leading universities, and innovative companies to create
										courses that are both practical and transformative.
									</p>
									<p>
										Today, EduFlow continues to evolve, leveraging cutting-edge
										technology to personalize learning experiences and make
										education more engaging, effective, and accessible than ever
										before.
									</p>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8 }}
								viewport={{ once: true }}
								className="relative"
							>
								<Image
									src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt="Team collaboration"
									className="rounded-2xl shadow-2xl"
									layout="responsive"
									width={600}
									height={400}
								/>
								<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
									<div className="text-2xl font-bold text-purple-600">2020</div>
									<div className="text-gray-600">Founded</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Values Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Our Values
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								These core values guide everything we do and shape the way we
								build our platform and serve our community.
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{values.map((value, index) => {
								const Icon = value.icon;
								return (
									<motion.div
										key={index}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										viewport={{ once: true }}
									>
										<Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
											<CardContent className="space-y-4">
												<div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
													<Icon className="h-8 w-8 text-purple-600" />
												</div>
												<h3 className="text-xl font-bold text-gray-900">
													{value.title}
												</h3>
												<p className="text-gray-600">{value.description}</p>
											</CardContent>
										</Card>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="py-20 bg-white/50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<motion.div
							className="text-center mb-16"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Meet Our Team
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Passionate educators and technologists working together to
								revolutionize online learning.
							</p>
						</motion.div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{team.map((member, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<Card className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0">
										<CardContent className="p-6">
											<Image
												src={member.image}
												alt={member.name}
												className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
												layout="responsive"
												width={96}
												height={96}
											/>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												{member.name}
											</h3>
											<p className="text-purple-600 font-medium mb-3">
												{member.role}
											</p>
											<p className="text-gray-600 mb-4">{member.bio}</p>
											<div className="flex flex-wrap justify-center gap-2">
												{member.expertise.map((skill, skillIndex) => (
													<Badge
														key={skillIndex}
														variant="secondary"
														className="text-xs"
													>
														{skill}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
								Ready to Start Learning?
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								Join our community of learners and start your journey to success
								today.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<motion.a
									href="/courses"
									className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white gradient-bg rounded-full hover:shadow-lg transition-all duration-300"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Explore Courses
								</motion.a>
								<motion.a
									href="/contact"
									className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-purple-600 bg-white border-2 border-purple-200 rounded-full hover:border-purple-400 transition-all duration-300"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Get in Touch
								</motion.a>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
		</>
	);
}
