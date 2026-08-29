import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LandingScreen from '@/components/screens/LandingScreen';
import IntroScreen from '@/components/screens/IntroScreen';
import FirstQuestionScreen from '@/components/screens/FirstQuestionScreen';
import PuzzleFlowScreen from '@/components/screens/PuzzleFlowScreen';
import BuildUpScreen from '@/components/screens/BuildUpScreen';
import ProposalScreen from '@/components/screens/ProposalScreen';
import SuccessScreen from '@/components/screens/SuccessScreen';

/**
 * Home Page - Interactive Proposal Experience
 * 
 * Design Philosophy: Ethereal Minimalism
 * - Pure white background with soft pink/purple glows
 * - Floating elements and meditative transitions
 * - Playful, slightly mysterious, engaging tone
 * - Smooth page transitions (fade + scale)
 * - Respects both "Yes" and "No" paths
 */

type ScreenType = 
  | 'landing' 
  | 'intro' 
  | 'firstQuestion' 
  | 'puzzleFlow' 
  | 'buildUp' 
  | 'proposal' 
  | 'success';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('landing');
  const [userPath, setUserPath] = useState<'yes' | 'no' | null>(null);
  const [puzzleStep, setPuzzleStep] = useState(0);

  const handleScreenTransition = (nextScreen: ScreenType, path?: 'yes' | 'no') => {
    if (path) {
      setUserPath(path);
    }
    setCurrentScreen(nextScreen);
  };

  const handlePuzzleComplete = () => {
    handleScreenTransition('buildUp');
  };

  const handleReturnToProposal = () => {
    setCurrentScreen('proposal');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <LandingScreen
            onStart={() => handleScreenTransition('intro')}
          />
        );
      case 'intro':
        return (
          <IntroScreen
            onContinue={() => handleScreenTransition('firstQuestion')}
          />
        );
      case 'firstQuestion':
        return (
          <FirstQuestionScreen
            onYes={() => handleScreenTransition('puzzleFlow', 'yes')}
            onNo={() => handleScreenTransition('puzzleFlow', 'no')}
          />
        );
      case 'puzzleFlow':
        return (
          <PuzzleFlowScreen
            userPath={userPath}
            onComplete={handlePuzzleComplete}
          />
        );
      case 'buildUp':
        return (
          <BuildUpScreen
            onContinue={() => handleScreenTransition('proposal')}
          />
        );
      case 'proposal':
        return (
          <ProposalScreen
            onYes={() => handleScreenTransition('success')}
            onThinking={handleReturnToProposal}
          />
        );
      case 'success':
        return <SuccessScreen />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Floating glow orbs background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-10 blur-3xl animate-glow-pulse" style={{ animationDelay: '0.75s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl animate-fade-in-up">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
