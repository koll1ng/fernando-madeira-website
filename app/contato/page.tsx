"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Instagram, Mail, MessageCircle, MapPin, Phone, Clock } from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Retornarei em breve.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">Entre em Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pronto para dar vida ao seu próximo projeto artístico? Vamos conversar sobre suas ideias e transformá-las
              em realidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <Card className="p-8 urban-shadow">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto *</Label>
                    <Input
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      placeholder="Sobre o que gostaria de falar?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Conte-me mais sobre seu projeto, ideias ou dúvidas..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full urban-shadow">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-8">
              {/* Redes Sociais */}
              <Card className="p-8 urban-shadow">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Conecte-se Comigo</h2>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/fernandomadeira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        @fernandomadeira
                      </div>
                      <div className="text-sm text-muted-foreground">Acompanhe meu trabalho no Instagram</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contato@fernandomadeira.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        contato@fernandomadeira.com
                      </div>
                      <div className="text-sm text-muted-foreground">E-mail para projetos e parcerias</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        (11) 99999-9999
                      </div>
                      <div className="text-sm text-muted-foreground">WhatsApp para contato direto</div>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Informações Adicionais */}
              <Card className="p-8 urban-shadow">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Informações</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Localização</div>
                      <div className="text-muted-foreground">São Paulo, SP - Brasil</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Horário de Atendimento</div>
                      <div className="text-muted-foreground">
                        Segunda a Sexta: 9h às 18h
                        <br />
                        Sábado: 9h às 14h
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Tempo de Resposta</div>
                      <div className="text-muted-foreground">Retorno em até 24 horas úteis</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Call to Action */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-foreground">Pronto para começar seu projeto?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Seja uma tatuagem personalizada, um mural para sua empresa ou uma obra de arte única, estou aqui para
                  transformar suas ideias em realidade visual.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="urban-shadow">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:contato@fernandomadeira.com">
                      <Mail className="h-4 w-4 mr-2" />
                      E-mail
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
